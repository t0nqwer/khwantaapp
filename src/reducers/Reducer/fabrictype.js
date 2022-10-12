import { ADDFABRIC, GETFABRICTYPE } from "@/constants/actionTypes";

export default (fabrictype = [], action) => {
  switch (action.type) {
    case GETFABRICTYPE:
      return action.payload;
    case ADDFABRIC:
      return [...fabrictype, action.payload];

    default:
      return fabrictype;
  }
};
