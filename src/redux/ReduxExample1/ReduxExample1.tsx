import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import counterReducer, { decrement, increment } from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const ReduxExample1 = () => {
  return (
    <Provider store={store}>
      <ReduxExample1Inner />
    </Provider>
  );
};

export const ReduxExample1Inner = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <span>{count}</span>
    </div>
  );
};
