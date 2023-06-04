import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterSlice from "./counterSlice";
import shoppingCartSlice from "./shoppingCartSlice";
import albumsSlice from "./itunesAlbumsDataSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    shoppingCart: shoppingCartSlice.reducer,
    albumsData: albumsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
