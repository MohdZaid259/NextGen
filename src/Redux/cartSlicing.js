import { createSlice } from "@reduxjs/toolkit";

const items=JSON.parse(localStorage.getItem('cartItems')) || [];

const initialState={
  cartItems:items,
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
        existingItem.totalPrice+=item.price;
      }else{
        state.cartItems.push({...item,quantity:1,totalPrice:item.price});
      }
      state.totalQuantity++;
      state.totalPrice+=item.price;
    },
    removeFromCart:(state,action)=>{
      const item=action.payload;
      const existingItem=state.cartItems.find((cartItem)=>cartItem.title==item.title);

      if(existingItem){
        state.totalQuantity-=existingItem.quantity;
        state.totalPrice-=existingItem.price;
        state.cartItems=state.cartItems.filter((cartItem)=>cartItem.title!=item.title)
      }
    },
    clearCart:(state,action)=>{
      state.cartItems=[],
      state.totalQuantity=0,
      state.totalPrice=0
    }
  }
})

export const {addToCart,removeFromCart,clearCart} = cartSlice.actions
export default cartSlice.reducer