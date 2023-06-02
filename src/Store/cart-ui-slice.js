import { createSlice } from "@reduxjs/toolkit";

const cartUiSlice = createSlice({
    name: "cartui",
    initialState: { cartIsVisible: false, notification:null },
    reducers: {
      cartToggle(state) {
        state.cartIsVisible = !state.cartIsVisible;
      },
      showNotif(state, action){
        state.notification = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message
        }
      }
    }
  });
  
  export const cartUiActions = cartUiSlice.actions;
  
  export default cartUiSlice.reducer;