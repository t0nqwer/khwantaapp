import { ADDPRODUCT } from "@/constants/actionTypes";
import {
  END_LOADING,
  GETPRODUCT,
  GETPRODUCTBYSEARCH,
  GETSINGLEPRODUCT,
  START_LOADING,
  GETDESIGNCODE,
} from "../../constants/actionTypes";

export default (state = { isLoading: true, Prodata: [], Design: [], Fabric: [] }, action) => {
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
      console.log({ ...state, data: [...state.Product, action.payload] });
      return { ...state, data: [...state.Product, action.payload] };
    case GETDESIGNCODE:
      console.log(action.payload);
      return { ...state, Design: action.payload[0], Fabric: action.payload[1] };

    default:
      return state;
  }
};
