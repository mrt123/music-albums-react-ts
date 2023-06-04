import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ItemWithoutQuantity {
  price: number;
  label: string;
  imageUrl: string | undefined;
}

interface ShoppingCartItem {
  price: number;
  quantity: number;
  label: string;
  imageUrl: string | undefined;
}

interface ShoppingCartState {
  items: ShoppingCartItem[];
  numberOfItems: number;
}

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    items: [],
    numberOfItems: 0,
  } as ShoppingCartState,
  reducers: {
    addItem: (state, action: PayloadAction<ItemWithoutQuantity>) => {
      const newItem = action.payload;

      const itemWithNewLabelInState = state.items.find(
        (item) => item.label === newItem.label
      );
      if (itemWithNewLabelInState) itemWithNewLabelInState.quantity++;
      else
        state.items.push({
          ...newItem,
          quantity: 1,
        });

      state.numberOfItems++;
    },
  },
});

export default shoppingCartSlice;
