import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { commonApi } from "./api/commonApi";
import { getListData } from "./api/lib/slice/slice";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Petdetail from "./components/Petdetail";

const App = () => {
  const dispatch = useDispatch();
  const petListData = async (query) => {
    const data = await commonApi(query);
    dispatch(getListData(data?.pets));
  };
  useEffect(() => {
    petListData("pets");
  }, []);
  return (
    <div className=" w-full ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petdetails/:id" element={<Petdetail />} />
      </Routes>
    </div>
  );
};

export default App;
