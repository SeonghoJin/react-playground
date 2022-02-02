import React from "react";
import {Route, Routes } from "react-router-dom";
import { ReactQueryRouter } from "./react-query/ReactQueryRouter";

function App() {
  return (
    <Routes>
      <Route path="/react-query/*" element={<ReactQueryRouter/>}></Route>
    </Routes>
  );
}

export default App;
