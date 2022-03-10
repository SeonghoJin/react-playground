import {
  configureStore,
  createAsyncThunk,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";
import * as React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { lazyApi } from "../../api";

const fetchLazyApi = createAsyncThunk(
  "fetchLazyApi",
  async ({ text }: { text: number }, thunkAPI) => {
    const data = await lazyApi(text);
    return data;
  }
);

const tempSlice = createSlice({
  name: "temp",
  initialState: {
    text: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLazyApi.fulfilled, (state, action) => {
      state.text = action.payload ?? 5;
    });
  },
});

const tempStore = configureStore({
  reducer: tempSlice.reducer,
});

export const ReduxExample3 = () => {
  return (
    <Provider store={tempStore}>
      <ReduxExample3Inner />
    </Provider>
  );
};

export const ReduxExample3Inner = () => {
  const dispatch = useDispatch();
  dispatch(fetchLazyApi({ text: 3 }));
  const text = useSelector((state: any) => state.text);
  return <div>{text}</div>;
};
