import { ADDFABRIC, GETFABRICTYPE, START_LOADING, END_LOADING } from "../constants/actionTypes";

import * as api from "../api";

export const getFabricType = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getFabricType();
    dispatch({ type: GETFABRICTYPE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const addFabric = (newFabric) => async (dispatch) => {
  try {
    const { data } = await api.addFabric(newFabric);

    dispatch({ type: ADDFABRIC, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
