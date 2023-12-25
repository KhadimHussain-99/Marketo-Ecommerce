import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    error: false,
    session: false,
    users: [],
  },
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;

      const user = state.users.findIndex(
        (user) => user.email === email && user.password === password
      );

      if (user !== -1) {
        state.session = true;
      } else {
        state.error = true;
      }
    },
    signUp: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { login, signUp } = usersSlice.actions;

export default usersSlice.reducer;
