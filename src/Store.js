import React from 'react'
import { configureStore, createSlice } from "@reduxjs/toolkit"
const initialState = {value: { username: ""} }:
const userSlice = createSlicete({
   name: "user",
   initialState,
   reducers : {
      login: (state, action) => {
         state.value = action.payload;
      },
      logout: (state) => {
         state = initialState;
      }
   }
})

export const { login, logout } = userSlice.actions;

const Store = configureStore({
   reducer: {
      user: userSlice.reducer,
   },
})

export default Store