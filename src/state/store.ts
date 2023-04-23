import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import shoppingCart from "./shoppingCartSlice";
import itunesAlbumsDataSlice from "./itunesAlbumsDataSlice";

const store = configureStore({
  reducer: combineReducers({
    shoppingCart: shoppingCart.reducer,
    itunesAlbumsData: itunesAlbumsDataSlice.reducer,
  }),
  middleware: [thunk, logger],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
