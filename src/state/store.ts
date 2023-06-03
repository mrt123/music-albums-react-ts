import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterSlice from "./counterSlice";
import shoppingCartSlice from "./shoppingCartSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    shoppingCart: shoppingCartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
