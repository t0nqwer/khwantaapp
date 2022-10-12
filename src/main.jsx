import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import { reducers } from "./reducers";
import "./assets/css/app.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
