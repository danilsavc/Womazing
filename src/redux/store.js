import { configureStore } from "@reduxjs/toolkit";

import filter from "./slices/filterSlice";
import clother from "./slices/clotherSlice";

export const store = configureStore( {
  reducer: {
    filter,
    clother,
  },
} );

