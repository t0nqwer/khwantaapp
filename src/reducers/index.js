import { combineReducers } from "redux";

import posts from "./Reducer/posts";
import inputs from "./Reducer/pattern";
import FabricType from "./Reducer/fabrictype";
import category from "./Reducer/category";

import brand from "./Reducer/brand";
import size from "./Reducer/size";
import sizede from "./Reducer/sizede";
import product from "./Reducer/product";
import singleproduct from "./Reducer/singleproduct";
import warehouse from "./Reducer/warehouse";

export const reducers = combineReducers({
  pattern: inputs,
  posts: posts,
  FabricType: FabricType,
  category: category,
  brand: brand,
  sizeName: size,
  sizede: sizede,
  product: product,
  singleproduct: singleproduct,
  warehouse: warehouse,
});
