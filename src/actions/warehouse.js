import * as api from "../api";
import { GETWAREHOUSE } from "../constants/actionTypes";

export const getWarehouse = (warehouse) => async (dispatch) => {
  try {
    const { data } = await api.getWarehouse(warehouse);

    dispatch({ type: GETWAREHOUSE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
