import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchClothers = createAsyncThunk( 'clother/fetchClothersStatus', async ( params ) => {
  const {
    currentPage,
    categoryId
  } = params;
  const { data } = await axios.get( `https://63763d1481a568fc25f99127.mockapi.io/items?page=${currentPage}&limit=6&${categoryId > 0 ? `category=${categoryId}` : ""}` );
  return data;
} );


const initialState = {
  items: [],
  status: 'loading', // loading | success | error
};

const clotherSlice = createSlice( {
  name: 'clother',
  initialState,
  reducers: {
    setItems( state, action ) {
      state.items = action.payload
    }
  },
  extraReducers: {
    [fetchClothers.pending]: ( state ) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchClothers.fulfilled]: ( state, action ) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchClothers.rejected]: ( state, action ) => {
      state.status = 'success';
      state.items = [];
    },
  },
} )

export const { setItems, } = clotherSlice.actions;

export default clotherSlice.reducer