import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: string[] = [];

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    resetInventory: () => {
      return initialState;
    },
    addItem: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item !== action.payload);
    },
  },
});

export const { resetInventory, addItem, removeItem } = inventorySlice.actions;

export default inventorySlice.reducer;
