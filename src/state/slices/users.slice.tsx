import { createSlice } from "@reduxjs/toolkit";
import { User } from '../../../types';

interface UserState {
  me: User,
  loggedIn: boolean,
  // bgColor: string
}


const initialState: UserState = {
  me: {},
  loggedIn: false
  // bgColor: "navy"
}

const users_slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.me = action.payload;
      state.loggedIn = true;
    },
    loggedOut: (state) => {
      state.me = {};
      state.loggedIn = false;
    },
    updatedProfile: (state, action) => {
      state.me = action.payload;
    },
    updatedPhoto: (state, action) => {
      state.me.photoURL = action.payload;
    },
    bgColorChoosen: (state, action) => {
      console.log(action.payload);
      state.me.bgColor = action.payload.color;
    },
  }
});

export default users_slice.reducer;
export const { loggedIn, loggedOut, updatedProfile, updatedPhoto, bgColorChoosen } = users_slice.actions;





