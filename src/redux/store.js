import { configureStore } from "@reduxjs/toolkit";

import NavReducer from "./NavReducer.reducer";

const store = configureStore({
  reducer: NavReducer,
});

export default store;
