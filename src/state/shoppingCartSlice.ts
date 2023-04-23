import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Album {
  title: string;
  price: number;
}

export interface ShoppingCartState {
  items: Album[];
}

const initialState: ShoppingCartState = {
  items: [],
};

const shoppingCart = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addAlbumToBasket: (
      state: ShoppingCartState,
      action: PayloadAction<{ album: Album }>
    ) => {
      state.items.push(action.payload.album);
    },
  },
});

export default shoppingCart;

export const { addAlbumToBasket } = shoppingCart.actions;
