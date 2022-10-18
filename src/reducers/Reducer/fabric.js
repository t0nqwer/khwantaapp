import { ADDFABRIC, GETFABRICTYPE } from "@/constants/actionTypes";
import { START_LOADING, END_LOADING } from "../../constants/actionTypes";

export default (fabrictype = [], action) => {
  switch (action.type) {
    case ADDFABRIC:
      return [...fabrictype, action.payload];

    default:
      return fabrictype;
  }
};
