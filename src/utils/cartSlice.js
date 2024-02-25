import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    price:[],
    finalPrice:0,
  },
  reducers: {
    addPrice:(state,action)=>{
      state.finalPrice+=action.payload
      //state.items.push(action.payload);
    },
    minusPrice:(state,action)=>{
      state.finalPrice-=action.payload
      //state.items.push(action.payload);
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { minusPrice,addPrice,addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
