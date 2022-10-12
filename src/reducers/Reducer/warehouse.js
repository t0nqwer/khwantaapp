import { GETWAREHOUSE } from "@/constants/actionTypes";

export default (warehouse = [], action) => {
  switch (action.type) {
    case GETWAREHOUSE:
      return action.payload;
  }
  return warehouse;
};
