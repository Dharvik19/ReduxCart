import { configureStore } from "@reduxjs/toolkit";
import cartuiSlice from './cart-ui-slice';
import cartSlice from './cart-slice'
const store = configureStore({
    reducer:{   
        cartui: cartuiSlice,
        cart: cartSlice,
    }
})

export default store; 