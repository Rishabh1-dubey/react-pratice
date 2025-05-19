import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    open: false,
    emails: [],
    selectedMail: null,
    searchText: "",
    user: null,
    authuser:null
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setEmails: (state, action) => {
      state.emails = action.payload;
    },
    setSelectedMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    SetsearchText: (state, action) => {
      state.searchText = action.payload;
    },
    Setuser: (state, action) => {
      state.user = action.payload;
    },
    setAuthUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setOpen, setEmails, setSelectedMail, SetsearchText ,Setuser,setAuthUser} =
  appSlice.actions;
export default appSlice.reducer;
