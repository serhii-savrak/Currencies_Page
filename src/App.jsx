import React from "react";
import Main from "./pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";

import AllRates from "./pages/AllRates/AllRates";

const App = (props) => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Currencies_App" element={<Main />} />
        <Route path="main" element={<Main />} />
        <Route path="all" element={<AllRates />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
