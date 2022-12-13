import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  currentPage: 1,
};

const filterSlice = createSlice( {
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId( state, action ) {
      state.categoryId = action.payload;
    },
    setCurrenPage( state, action ) {
      state.currentPage = action.payload;
    },
    setFilters( state, action ) {
      state.currentPage = Number( action.payload.currentPage );
      state.categoryId = Number( action.payload.categoryId );

    }
  }
} )

export const selectFilter = ( state ) => state.filter

export const { setCategoryId, setCurrenPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer