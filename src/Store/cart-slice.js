import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { cartIsVisible: false },
    reducers: {
      cartToggle(state) {
        state.cartIsVisible = !state.cartIsVisible;
      }
    }
  });
  
  export const cartActions = cartSlice.actions;
  
  export default cartSlice.reducer;