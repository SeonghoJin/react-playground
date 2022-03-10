import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { ReactQueryRouter } from "./react-query/ReactQueryRouter";
import { RecoilRouter } from "./recoil/RecoilRouter";
import { ReduxRouter } from "./redux/ReduxRouter";

function App() {
  return (
    <>
      <Link to={"/react-query"}>React-Query-Example</Link>
      <br></br>
      <Link to={"/recoil"}>Recoil-Example</Link>
      <br></br>
      <Link to={"/redux"}>Redux-Example</Link>
      <Routes>
        <Route path="/react-query/*" element={<ReactQueryRouter />} />
        <Route path="/recoil/*" element={<RecoilRouter />} />
        <Route path="/redux/*" element={<ReduxRouter />} />
      </Routes>
    </>
  );
}

export default App;
