import { ADDPETERN, GETPETERN } from "@/constants/actionTypes";

export default (inputs = [], action) => {
  switch (action.type) {
    case GETPETERN:
      return action.payload;
    case ADDPETERN:
      return [...inputs, action.payload];
    default:
      return inputs;
  }
};
