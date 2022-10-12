import { GETSIZEDE } from "@/constants/actionTypes";

export default (Size = [], action) => {
  switch (action.type) {
    case GETSIZEDE:
      return action.payload;
  }
  return Size;
};
