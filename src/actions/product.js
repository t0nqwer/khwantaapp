import {
  ADDPRODUCT,
  GETPRODUCT,
  GETSINGLEPRODUCT,
  GETPRODUCTBYSEARCH,
  ADDDESIGN,
  START_LOADING,
  END_LOADING,
  GETDESIGNCODE,
} from "../constants/actionTypes";

import * as api from "../api";

// Action Creator

export const addproduct = (page) => async (dispatch) => {
  try {
    const { data } = await api.addproduct(page);

    dispatch({ type: ADDPRODUCT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addDesign = (design) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.addDesign(design);

    dispatch({ type: ADDDESIGN, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.getProduct(product);

    dispatch({ type: GETPRODUCT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductBysearch = (searchQuery) => async (dispatch) => {
  try {
    const { data } = await api.getProductBysearch(searchQuery);

    dispatch({ type: GETPRODUCTBYSEARCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getsingleproduct = (id) => async (dispatch) => {
  try {
    const { data } = await api.getSingleProduct(id);
    dispatch({ type: GETSINGLEPRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getDesignCode = (product) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getDesignCode();
    dispatch({ type: GETDESIGNCODE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};
