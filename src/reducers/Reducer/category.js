import { GETTYPE, ADDTYPE } from "@/constants/actionTypes";

export default (category = [], action) => {
  switch (action.type) {
    case GETTYPE:
      return action.payload;
      case ADDTYPE:
        return [...category, action.payload];
  }
  return category;
};
