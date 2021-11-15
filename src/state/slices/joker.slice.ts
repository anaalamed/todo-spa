import { createSlice } from "@reduxjs/toolkit";
import * as joker_api from "../../api/joker.api";

const joker_slice = createSlice({
  name: "joker",
  initialState: {
    data: "",
    is_loading: false,
    error_msg: ""
  },
  reducers: {
    fetch_started: state => {
      state.is_loading = true;
      state.data = "";
      state.error_msg = "";
    },
    fetch_failed: (state, action) => {
      state.error_msg = action.payload;
      state.data = "";
      state.is_loading = false;
    },
    data_ready(state, action) {
      state.data = action.payload;
      state.is_loading = false;
      state.error_msg = "";
      //alternatively you can return an object...
      /* 
      return {
        ...state,
        data : action.payload,
        is_loading : false,
        error_msg : ''
      } 
      */
    }
  }
});

export default joker_slice.reducer;

const { fetch_started, fetch_failed, data_ready } = joker_slice.actions;

export const fetch_random_joke = () => async dispatch => {
  try {
    dispatch(fetch_started());
    const data = await joker_api.get_random_joke();
    if (!data.value) throw new Error("Quote data came back with no results");
    dispatch(data_ready(data.value));
  } catch (err) {
    dispatch(fetch_failed("The quotes data is unavailable at the moment"));
  }
};
