import { FETCH } from "@/constants/actionTypes";

export default (inputs = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;
    default:
      return inputs;
  }
};
