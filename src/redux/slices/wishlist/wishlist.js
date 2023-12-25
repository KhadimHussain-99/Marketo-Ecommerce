import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addWishlist: (state, action) => {
      const prod = action.payload;
      const verifyProd = state.filter((item) => item.id === prod.id);

      if (verifyProd.length <= 0) {
        state.push(prod);
      }
    },
    delWishlist: (state, action) => {
      const id = action.payload;

      const itemIndex = state.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
      }
    },
  },
});

export const { addWishlist, delWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
