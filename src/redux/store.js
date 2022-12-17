import { configureStore } from "@reduxjs/toolkit";

import filter from "./slices/filterSlice";
import clother from "./slices/clotherSlice";
import bag from "./slices/bagSlice"

export const store = configureStore( {
  reducer: {
    filter,
    clother,
    bag,
  },
} );

