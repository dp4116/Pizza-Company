import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  cart:[],
//   cart: [{
//   pizzaId:12,
//   name:'pizza hut special',
//   quantity:1,
//   unitPrice:20,
//   totalPrice:20,
// },],
};
 const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state,action) => {
        state.cart.push(action.payload);
    },
    deleteItem: (state,action) => {
        state.cart = state.cart.filter((item)=> item.pizzaId!==action.payload);
    },
    incrementItemQuantity: (state, action) => {
       
       const item = state.cart.find((item)=> item.pizzaId===action.payload);

       item.quantity++;
       item.totalPrice = item.quantity * item.unitPrice;
    },
    decrementItemQuantity: (state, action) => {
        const item = state.cart.find((item)=> item.pizzaId===action.payload);

        if(item.quantity===1){
          state.cart = state.cart.filter((item)=> item.pizzaId!==action.payload);
        }
        item.quantity--;
        item.totalPrice = item.quantity*item.unitPrice;

        
      },
    clearCart: (state)=>{
        state.cart= [];
    },
  },
})

export const { addItem, 
               deleteItem,
               incrementItemQuantity,
               decrementItemQuantity,
               clearCart 
              } = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = state => state.cart.cart;

export const getTotalCartQuantity = (state)=> state.cart.cart.reduce((sum,item) => sum+item.quantity,0);

export const getTotalCartPrice = (state)=> state.cart.cart.reduce((sum,item)=> sum+item.totalPrice,0);

export const getCurrentQuantityById = (id) => state=>state.cart.cart.find((item)=> item.pizzaId===id)?.quantity??0;
