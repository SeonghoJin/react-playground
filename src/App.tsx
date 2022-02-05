import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import { ReactQueryRouter } from "./react-query/ReactQueryRouter";
import {RecoilRoot} from "recoil";
import { RecoilRouter } from "./recoil/RecoilRouter";

function App() {
  return (
      <>
          <Link to={'/react-query'}>React-Query-Example</Link>
          <br/>
          <Link to={'/recoil'}>Recoil-Example</Link>
          <Routes>
              <Route path="/react-query/*" element={<ReactQueryRouter/>}></Route>
              <Route path="/recoil/*" element={<RecoilRouter/>}></Route>
          </Routes>
      </>

  );
}

export default App;
