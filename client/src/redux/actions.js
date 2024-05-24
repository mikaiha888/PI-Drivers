import axios from "axios";
import {
  FETCH_ERROR,
  GET_ALL_DRIVERS,
  GET_DRIVERS_BY_NAME,
  GET_DRIVER_BY_ID,
} from "./action-type";

const DRIVERS_URL = "http://localhost:3001/drivers";

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
      const { data } = axios.get(`${DRIVERS_URL}/${id}`);
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
      const { data } = axios.get(`${DRIVERS_URL}/search?name=${query}`);
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
