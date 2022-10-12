import { ADDPRODUCT } from "@/constants/actionTypes";
import {
  END_LOADING,
  GETPRODUCT,
  GETPRODUCTBYSEARCH,
  GETSINGLEPRODUCT,
  START_LOADING,
  GETDESIGNCODE,
} from "../../constants/actionTypes";

export default (state = { isLoading: true, Prodata: [], Design: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GETPRODUCT:
      return action.payload;
    case GETPRODUCTBYSEARCH:
      return action.payload;
    case ADDPRODUCT:
      return { ...state, data: [...state.Product, action.payload] };
    case GETDESIGNCODE:
      return { ...state, Design: action.payload };

    default:
      return state;
  }
};
