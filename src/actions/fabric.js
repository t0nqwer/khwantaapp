import { ADDFABRIC, GETFABRICTYPE } from "../constants/actionTypes";

import * as api from "../api";

export const getFabricType = () => async (dispatch) => {
  try {
    const { data } = await api.getFabricType();
    dispatch({ type: GETFABRICTYPE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addFabric = (newFabric) => async (dispatch) => {
  try {
    console.log(newFabric);
    const { data } = await api.addFabric(newFabric);

    dispatch({ type: ADDFABRIC, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
