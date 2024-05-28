import {
  CREATE_DRIVER,
  FILTER_DRIVERS,
  GET_ALL_DRIVERS,
  GET_ALL_TEAMS,
  GET_DRIVERS_BY_NAME,
  GET_DRIVER_BY_ID,
  SORT_DRIVERS,
  CLEAR_DRIVERS
} from "./action-type";

const initialState = {
  allDrivers: [],
  allTeams: [],
  driver: {},
  team: {},
  filteredDrivers: [],
  errors: null,
};

const reducer = (state = initialState, action) => {
  let filteredDrivers = [...state.allDrivers];
  let sortedDrivers = [...state.allDrivers];
  switch (action.type) {
    case GET_ALL_DRIVERS:
      return {
        ...state,
        allDrivers: action.payload.sort((a, b) =>
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

    case FILTER_DRIVERS:
      if (action.payload[0] === "byTeams") {
        if (action.payload[1] === "all") filteredDrivers = state.allDrivers;
        else
          filteredDrivers = state.allDrivers.filter((driver) =>
            driver.teams?.includes(action.payload[1])
          );
      }
      if (action.payload[0] === "byDb") {
        if (action.payload[1] === "all") filteredDrivers = state.allDrivers;
        if (action.payload[1] === "db")
          filteredDrivers = state.allDrivers.filter((driver) =>
            isNaN(driver.id)
          );
        if (action.payload[1] === "api")
          filteredDrivers = state.allDrivers.filter(
            (driver) => !isNaN(driver.id)
          );
      }
      return {
        ...state,
        filteredDrivers: filteredDrivers,
      };

    case SORT_DRIVERS:
      if (action.payload.sortBy === "name") {
        sortedDrivers =
          action.payload.sort === "ascending"
            ? sortedDrivers.sort((a, b) =>
                a.firstName.localeCompare(b.firstName)
              )
            : sortedDrivers.sort((a, b) =>
                b.firstName.localeCompare(a.firstName)
              );
      }
      if (action.payload.sortBy === "dob") {
        sortedDrivers =
          action.payload.sort === "descending"
            ? sortedDrivers.sort(
                (a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth)
              )
            : sortedDrivers.sort(
                (a, b) => new Date(b.dateOfBirth) - new Date(a.dateOfBirth)
              );
      }
      return {
        ...state,
        filteredDrivers: sortedDrivers,
      };

    case CLEAR_DRIVERS:
      return {
        ...state,
        filteredDrivers: [],
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
