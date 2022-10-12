import * as api from "../api";
import { GETSIZEDE, GETSIZE } from "../constants/actionTypes";

export const getSize = (Size) => async (dispatch) => {
  try {
    const { data } = await api.getSize(Size);

    dispatch({ type: GETSIZE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getSizeDe = (SizeDe) => async (dispatch) => {
  try {
    const { data } = await api.getSizeDe(SizeDe);

    dispatch({ type: GETSIZEDE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
