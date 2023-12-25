import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    prods: [],
    searchedProds: [],
    cartProds: [],
  },
  reducers: {
    addProd: (state, action) => {
      state.prods.push(...action.payload);
      state.searchedProds.push(...action.payload);
    },
    search: (state, action) => {
      const search = action.payload;

      const prods = state.prods.filter((item) =>
        item.category.toLowerCase().includes(search)
      );

      if (prods.length >= 0) {
        state.searchedProds.splice(0, state.searchedProds.length, ...prods);
      }
    },
    addCart: (state, action) => {
      const id = action.payload;

      const foundProd = state.prods.find((prod) => prod.id === id);

      if (foundProd) {
        const itemIndex = state.cartProds.findIndex((item) => item.id === id);

        if (itemIndex !== -1) {
          state.cartProds[itemIndex].cart += 1;
        } else {
          state.cartProds.push(foundProd);
        }
      }
    },
    delCart: (state, action) => {
      const id = action.payload;

      const itemIndex = state.cartProds.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        const product = state.cartProds[itemIndex].cart;

        if (product === 1) {
          state.cartProds.splice(itemIndex, 1);
        } else {
          state.cartProds[itemIndex].cart -= 1;
        }
      }
    },
  },
});

export const { addProd, search, addCart, delCart } = productsSlice.actions;

export default productsSlice.reducer;
