import {createSlice, current} from "@reduxjs/toolkit";
import {OrderInterface} from "../interfaces/order.interface"

const initialState: OrderInterface = {
   items: [],
   totalAmount: 0
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      sumPrice(state: OrderInterface) {
         state.totalAmount = state.items.reduce((accumulator: number, item): number=> {
            return Number(accumulator + (item.price * item.quantity).toFixed(2))
         }, 0)
      },
      addToBasket(state, action) {
         const item = current(state).items.find(item => item.id === action.payload.id)

         if (item) {
            const newItem = {...item}
            newItem.quantity = Number(item.quantity) + Number(action.payload.quantity)
            state.items.splice(state.items.indexOf(item), 1, newItem)
         } else {
            state.items = [...state.items, action.payload]
         }
      },
      increment(state, action){
         const item = state.items.find(item => item.id === action.payload)
         if(item){
            const newItem = {...item}
            newItem.quantity = Number(item.quantity) + 1
            state.items.splice(state.items.indexOf(item), 1, newItem)
         }
      },
      decrement(state, action){
         const item = state.items.find(item => item.id === action.payload)
         if(item){
            if (item.quantity > 1) {
               const newItem = {...item}
               newItem.quantity = item.quantity - 1
               state.items.splice(state.items.indexOf(item), 1, newItem)
            } else {
               state.items.splice(state.items.indexOf(item), 1)
            }
         }
      },
      remove(state, action){
         const item = state.items.find(item => item.id === action.payload)
          item && state.items.splice(state.items.indexOf(item), 1)
      }
   }
})

export const cartActions = cartSlice.actions
export default cartSlice