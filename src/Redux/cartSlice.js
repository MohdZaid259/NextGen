import { createSlice } from "@reduxjs/toolkit";

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
      let item=state.cartItems.find((cartItem)=>cartItem.title==action.payload.title);
      item.quantity+=1;
      state.totalQuantity+=1;
      state.totalPrice+=Number(item.price);
    },
    decrement:(state,action)=>{
      let item=state.cartItems.find((cartItem)=>cartItem.title==action.payload.title);
      if(action.payload.quantity>1){
        item.quantity-=1;
        state.totalQuantity-=1;
        state.totalPrice-=Number(item.price);
      }else{
        state.totalQuantity-=1;
        state.totalPrice-=Number(item.price);
        state.cartItems=state.cartItems.filter((cartItem)=>cartItem.title!=action.payload.title)
      }
    }
  }
})

export const {addToCart,removeFromCart,increment,decrement} = cartSlice.actions
export default cartSlice.reducer