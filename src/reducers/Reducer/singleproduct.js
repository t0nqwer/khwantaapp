import { GETSINGLEPRODUCT } from "../../constants/actionTypes";

export default (singleproduct = [], action) => {
  switch (action.type) {
    case GETSINGLEPRODUCT:
      return action.payload;
    default:
      return singleproduct;
  }
};
