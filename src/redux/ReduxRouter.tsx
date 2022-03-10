import { Route, Routes } from "react-router-dom";
import { ReduxExample1 } from "./ReduxExample1/ReduxExample1";
import { ReduxExample2 } from "./ReduxExample2/ReduxExample2";
import { ReduxExample3 } from "./ReduxExample3";

export const ReduxRouter = () => {
  return (
    <Routes>
      <Route path={"/1"} element={<ReduxExample1 />} />
      <Route path={"/2"} element={<ReduxExample2 />} />
      <Route path={"/3"} element={<ReduxExample3 />} />
    </Routes>
  );
};
