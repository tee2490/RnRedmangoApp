import { createSlice } from "@reduxjs/toolkit";
import { SD_SortTypes } from "../common/SD";

const initialState = {
  menuItem: [],
  search: "",
  sort: SD_SortTypes.NAME_A_Z,
};

export const menuItemSlice = createSlice({
  name: "MenuItem",
  initialState: initialState,
  reducers: {
    setMenuItem: (state, action) => {
      state.menuItem = action.payload;
    },
    setSearchItem: (state, action) => {
      state.search = action.payload;
    },
    setSortItem: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setMenuItem, setSearchItem, setSortItem } =
  menuItemSlice.actions;
export const menuItemReducer = menuItemSlice.reducer;
