import { GETSIZE, GETSIZEDE } from "@/constants/actionTypes";

export default (Size = [], action) => {
  switch (action.type) {
    case GETSIZE:
      return action.payload;
  }
  return Size;
};
