import React, { useState, useEffect } from "react";
import ScrollToTop from "@/base-components/scroll-to-top/Main";
import { useDispatch } from "react-redux";
import { getBrand, getInput, getPattern } from "./actions/inputs";
import { getType } from "./actions/category";
import { getFabricType } from "./actions/fabric";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./router";
import { getSize, getSizeDe } from "./actions/size";
import { getDesignCode } from "./actions/product";

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(getInput());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getProduct());
  // }, [dispatch, currentId]);
  useEffect(() => {
    dispatch(getDesignCode());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFabricType());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getType());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPattern());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getBrand());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getSize());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getSizeDe());
  }, [dispatch]);
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Router currentId={currentId} setCurrentId={setCurrentId} />
        <ScrollToTop />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
