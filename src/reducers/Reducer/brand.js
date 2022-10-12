import { GETBRAND} from "@/constants/actionTypes";

export default (Brand = [], action) => {
  switch (action.type) {
    case GETBRAND:
      return action.payload;
  }
  return Brand;
};