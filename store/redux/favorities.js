import { createSlice } from "@reduxjs/toolkit";

const favoritiesSlice = createSlice({
  name: "favorities",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavoritie: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoritiesSlice.actions.addFavorite;
export const removeFavoritie = favoritiesSlice.actions.removeFavoritie;
export default favoritiesSlice.reducer;
