import { GET_ALL_DRIVERS, GET_DRIVERS_BY_NAME, GET_DRIVER_BY_ID } from "./action-type";

const initialState = {
  allDrivers: [],
  allTeams: [],
  drivers: [],
  driver: {},
  teams: [],
  team: {},
  errors: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DRIVERS:
      return {
        ...state,
        allDrivers: action.payload
      }
      
    case GET_DRIVER_BY_ID:
      return {
        ...state,
        driver: action.payload
      }
      
    case GET_DRIVERS_BY_NAME:
      return {
        ...state,
        drivers: action.payload
      }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
