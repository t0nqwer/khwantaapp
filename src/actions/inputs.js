import { FETCH, ADDPETERN, GETPETERN, GETBRAND, ADDTYPE, START_LOADING, END_LOADING } from "../constants/actionTypes";

import * as api from "../api";

export const getInput = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getInputs();
    dispatch({ type: FETCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getBrand = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getBrand();
    dispatch({ type: GETBRAND, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const addPetern = (patternDesign) => async (dispatch) => {
  try {
    console.log(patternDesign);
    const { data } = await api.addPetern(patternDesign);

    dispatch({ type: ADDPETERN, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const addcategory = (category) => async (dispatch) => {
  try {
    console.log(category);
    dispatch({ type: START_LOADING });
    const { data } = await api.addType(category);

    dispatch({ type: ADDTYPE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPattern = (patternDesign) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getPattern(patternDesign);

    dispatch({ type: GETPETERN, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};
