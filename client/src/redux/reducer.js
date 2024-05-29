import {
  CREATE_DRIVER,
  FILTER_DRIVERS,
  GET_ALL_DRIVERS,
  GET_ALL_TEAMS,
  GET_DRIVERS_BY_NAME,
  GET_DRIVER_BY_ID,
  SORT_DRIVERS,
  CLEAR_DRIVERS,
  FETCH_ERROR,
  HANDLE_ERROR,
} from "./action-type";

const initialState = {
  allDrivers: [],
  allTeams: [],
  driver: {},
  team: {},
  filteredDrivers: [],
  sortCriteria: { sortBy: "name", sort: "ascending" },
  fetchError: null,
};

const filterDrivers = (drivers, filter) => {
  let filteredDrivers = [...drivers];
  if (filter[0] === "byTeams") {
    if (filter[1] === "all") filteredDrivers = drivers;
    else
      filteredDrivers = drivers.filter((driver) =>
        driver.teams?.includes(filter[1])
      );
  }
  if (filter[0] === "byDb") {
    if (filter[1] === "all") filteredDrivers = drivers;
    if (filter[1] === "db")
      filteredDrivers = drivers.filter((driver) => isNaN(driver.id));
    if (filter[1] === "api")
      filteredDrivers = drivers.filter((driver) => !isNaN(driver.id));
  }
  return filteredDrivers;
};

const sortDrivers = (drivers, sort) => {
  let sortedDrivers = [...drivers];
  console.log(sort);
  if (sort.sortBy === "name") {
    sortedDrivers = sortedDrivers.sort((a, b) => {
      const nameComparison = a.firstName.localeCompare(b.firstName);
      if (nameComparison !== 0) {
        return sort.sort === "ascending" ? nameComparison : -nameComparison;
      }
      const lastNameComparison = a.lastName.localeCompare(b.lastName);
      return sort.sort === "ascending"
        ? lastNameComparison
        : -lastNameComparison;
    });
  }
  if (sort.sortBy === "dob") {
    sortedDrivers =
      sort.sort === "ascending"
        ? drivers.sort(
            (a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth)
          )
        : drivers.sort(
            (a, b) => new Date(b.dateOfBirth) - new Date(a.dateOfBirth)
          );
  }
  return sortedDrivers;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DRIVERS:
      return {
        ...state,
        allDrivers: action.payload.sort((a, b) =>
          a.firstName.localeCompare(b.firstName)
        ),
        filteredDrivers: action.payload.sort((a, b) =>
          a.firstName.localeCompare(b.firstName)
        ),
      };

    case GET_DRIVER_BY_ID:
      return {
        ...state,
        driver: action.payload,
      };

    case GET_DRIVERS_BY_NAME:
      return {
        ...state,
        filteredDrivers: action.payload,
      };

    case CREATE_DRIVER:
      return {
        ...state,
        driver: action.payload,
      };

    case GET_ALL_TEAMS:
      return {
        ...state,
        allTeams: action.payload,
      };

    case FILTER_DRIVERS: {
      const filteredDrivers = filterDrivers(state.allDrivers, action.payload);
      const sortedDrivers = sortDrivers(filteredDrivers, state.sortCriteria);
      return {
        ...state,
        filteredDrivers: sortedDrivers,
      };
    }

    case SORT_DRIVERS: {
      const sortedDrivers = sortDrivers(state.filteredDrivers, action.payload);
      return {
        ...state,
        filteredDrivers: sortedDrivers,
        sortCriteria: action.payload,
      };
    }

    case CLEAR_DRIVERS:
      return {
        ...state,
        filteredDrivers: [...state.allDrivers],
      };

    case FETCH_ERROR:
      return {
        ...state,
        fetchError: [action.payload],
      };

    case HANDLE_ERROR:
      return {
        ...state,
        fetchError: state.fetchError.slice(1),
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
