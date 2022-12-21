import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { ftpDb } from "./services/ftpDb";

export const store = configureStore({
  reducer: {
    [ftpDb.reducerPath]: ftpDb.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ftpDb.middleware),
});