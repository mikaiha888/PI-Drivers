import axios from "axios";
import {
  GET_ALL_DRIVERS,
  GET_DRIVERS_BY_NAME,
  GET_DRIVER_BY_ID,
  CREATE_DRIVER,
  GET_ALL_TEAMS,
  SORT_DRIVERS,
  FILTER_DRIVERS,
  CLEAR_DRIVERS,
  FETCH_ERROR,
  HANDLE_ERROR
} from "./action-type";

const DRIVERS_URL = "http://localhost:3001/drivers";
const TEAMS_URL = "http://localhost:3001/teams";

export const getAllDrivers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(DRIVERS_URL);
      dispatch({
        type: GET_ALL_DRIVERS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        payload: error.message,
      });
    }
  };
};

export const getDriverById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${DRIVERS_URL}/${id}`);
      dispatch({
        type: GET_DRIVER_BY_ID,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        payload: error.message,
      });
    }
  };
};

export const getDriversByName = (query) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${DRIVERS_URL}/search?name=${query}`);
      dispatch({
        type: GET_DRIVERS_BY_NAME,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        payload: error.message,
      });
    }
  };
};

export const createDriver = (body) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(DRIVERS_URL, body);
      dispatch({
        type: CREATE_DRIVER,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        payload: error.message,
      });
    }
  };
};

export const getAllTeams = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(TEAMS_URL);
      dispatch({
        type: GET_ALL_TEAMS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        payload: error.message,
      });
    }
  };
};

export const filterDrivers = (filter) => {
  return { type: FILTER_DRIVERS, payload: filter };
};

export const sortDrivers = (sortOrder) => {
  return { type: SORT_DRIVERS, payload: sortOrder };
};

export const clearDrivers = () => {
  return { type: CLEAR_DRIVERS };
};

export const handleError = () => ({
  type: HANDLE_ERROR,
});
