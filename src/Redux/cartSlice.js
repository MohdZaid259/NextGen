import { createSlice } from "@reduxjs/toolkit";
import { ImConnection } from "react-icons/im";

const initialState={
  cartItems:[],
  totalQuantity:0,
  totalPrice:0
}

const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{ 
    addToCart:(state,action)=>{
      const item=action.payload;
      const existingItem=state.cartItems.find((cartItem)=>cartItem.title==item.title);

      if(existingItem){
        existingItem.quantity++;
      }else{
        state.cartItems.push({...item,quantity:1});
      }
      state.totalQuantity++;
      state.totalPrice+=Number(item.price);
    },
    removeFromCart:(state,action)=>{
      const item=action.payload;
      const existingItem=state.cartItems.find((cartItem)=>cartItem.title==item.title);

      if(existingItem){
        state.totalQuantity-=existingItem.quantity;
        state.totalPrice-=Number(existingItem.price);
        state.cartItems=state.cartItems.filter((cartItem)=>cartItem.title!=item.title)
      }
    },
    increment:(state,action)=>{
      const item = state.cartItems.find(item => item === action.payload);
      if(item){
        item.quantity += 1;
      }                                                                //cartItems looks like this:[{...},{...},{...}]
    },
    decrement:(state,action)=>{
      const item = state.cartItems.find(item => item === action.payload);
      if (item) {
        item.quantity -= 1;
      }
    }
  }
})

export const {addToCart,removeFromCart,increment,decrement} = cartSlice.actions
export default cartSlice.reducer