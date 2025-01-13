import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorities";

export const store = configureStore({
  /*
     reducers are the different slices of state
    */
  reducer: {
    favoritieMeals: favoritesReducer,
  },
});
