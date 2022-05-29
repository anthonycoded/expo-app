import { configureStore } from "@reduxjs/toolkit";
import { customerReducer } from "./reducers/customerReducer";
import { cartReducer } from "./reducers/cartReducer";

export const store = configureStore({
  reducer: { customers: customerReducer, cart: cartReducer },
});
