import { Route, Routes } from "react-router-dom";
import { ReduxExample1 } from "./ReduxExample1/ReduxExample1";

export const ReduxRouter = () => {
  return (
    <Routes>
      <Route path={"/1"} element={<ReduxExample1 />} />
    </Routes>
  );
};
