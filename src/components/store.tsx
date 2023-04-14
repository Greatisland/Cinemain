import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"



let cart = createSlice({
  name: 'cart',
  initialState: {

  },
  reducers: {

  }
})

export let { } = cart.actions
const store = configureStore({
  reducer : {
    cart: cart.reducer,
  }
})

export default store