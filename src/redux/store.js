import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/auth/authentication";
import productsReducer from "./slices/products/product";
import wishlistReducer from "./slices/wishlist/wishlist";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
    wishlist: wishlistReducer,
  },
});
