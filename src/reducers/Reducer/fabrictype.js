import { ADDFABRIC, GETFABRICTYPE } from "@/constants/actionTypes";
import { START_LOADING, END_LOADING } from "../../constants/actionTypes";

export default (fabrictype = [[], [], [], [], { isLoading: true }], action) => {
  switch (action.type) {
    case START_LOADING:
      const newARR = fabrictype.map((obj) => {
        if (obj.isLoading === false) {
          return { ...obj, isLoading: true };
        }
        return obj;
      });
      return newARR;
    case END_LOADING:
      const newARR2 = fabrictype.map((obj) => {
        if (obj.isLoading === true) {
          return { ...obj, isLoading: false };
        }
        return obj;
      });
      return newARR2;
    case GETFABRICTYPE:
      return [action.payload[0], action.payload[1], action.payload[2], action.payload[3], { isLoading: false }];

    default:
      return fabrictype;
  }
};
