import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const bagSlice = createSlice( {
  name: 'bag',
  initialState,
  reducers: {
    addItem( state, action ) {
      const findItem = state.items.find( obj => obj.id === action.payload.id );

      if ( findItem ) {
        findItem.count++;
      } else {
        state.items.push( {
          ...action.payload,
          count: 1
        } )
      }

      state.totalPrice = state.items.reduce( ( sum, obj ) => {
        return ( obj.price * obj.count ) + sum;
      }, 0 )
    },

    removeItem( state, action ) {
      state.items = state.items.filter( obj => obj.id !== action.payload )
      state.totalPrice = state.items.reduce( ( sum, obj ) => {
        return ( obj.price * obj.count ) + sum;
      }, 0 )
    },

    minusItem( state, action ) {
      const findItem = state.items.find( obj => obj.id === action.payload );
      if ( findItem ) {
        findItem.count--;
      }
    },
  }
} )

export const { addItem, removeItem, minusItem } = bagSlice.actions;

export default bagSlice.reducer