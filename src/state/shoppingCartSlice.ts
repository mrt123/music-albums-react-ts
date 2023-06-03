import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ShoppingCartItem {
  price: number;
  label: string;
  imageUrl: string | undefined;
}

interface ShoppingCartState {
  items: ShoppingCartItem[];
}

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    items: [],
  } as ShoppingCartState,
  reducers: {
    addItem: (state, action: PayloadAction<ShoppingCartItem>) => {
      state.items.push(action.payload);
    },
  },
});

export default shoppingCartSlice;
