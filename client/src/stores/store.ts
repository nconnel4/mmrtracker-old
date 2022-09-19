import { configureStore } from '@reduxjs/toolkit';

import { itemsApi } from '@/features/items';
import inventoryReducer from '@/stores/inventorySlice';

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    [itemsApi.reducerPath]: itemsApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
