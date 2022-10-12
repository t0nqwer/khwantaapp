import { GETTYPE, GETFABRICTYPE } from "../constants/actionTypes";

import * as api from "../api";

export const getType = (newType) => async (dispatch) => {
    try {
      const { data } = await api.getType(newType);
      dispatch({ type: GETTYPE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  