import {
  AnyAction,
  configureStore,
  createAction,
  createReducer,
  createStore,
  PayloadAction,
  PayloadActionCreator,
} from "@reduxjs/toolkit";
import { access } from "fs";
import { Provider, useDispatch, useSelector } from "react-redux";

const increment = createAction<number>("increment");
const decrement = createAction<number>("decrement");

function isActionWithNumberPayload(
  action: AnyAction
): action is PayloadAction<number> {
  return typeof action.payload === "number";
}

const reducer = createReducer(
  {
    counter: 0,
    sumOfNumberPayloads: 0,
    unhandledActions: 0,
  },
  (builder) => {
    builder
      .addCase(increment, (state, action) => {
        console.log("ReduxExample2");
        state.counter += action.payload;
      })
      .addCase(decrement, (state, action) => {
        console.log("ReduxExample2");
        state.counter -= action.payload;
      })
      .addMatcher(isActionWithNumberPayload, (state, action) => {})
      .addDefaultCase((state, action) => {});
  }
);

const store = createStore(reducer);

export const ReduxExample2 = () => {
  return (
    <Provider store={store}>
      <ReduxExample2Inner />
    </Provider>
  );
};

export const ReduxExample2Inner = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter);

  return (
    <div>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>decrement</button>
      <span>{count}</span>
    </div>
  );
};
