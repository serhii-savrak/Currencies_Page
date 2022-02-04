import React from "react";
import CurrencyInput from "./pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";

import AllRates from "./pages/AllRates/AllRates";

const App = (props) => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CurrencyInput />} />
        <Route path="all" element={<AllRates />} />
      </Routes>
    </>
  );
};

export default App;
