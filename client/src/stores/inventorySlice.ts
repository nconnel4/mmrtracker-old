import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/stores/store';

export type ProgressiveItems = {
  sword: number;
  bow: number;
  bomb: number;
  wallet: number;
  shield: number;
  bottle: number;
};

interface InventoryState {
  inventory: string[];
  itemLevel: ProgressiveItems;
  maxItemLevel: ProgressiveItems;
}

const initialState: InventoryState = {
  inventory: [],
  itemLevel: {
    sword: -1,
    bow: -1,
    bomb: -1,
    wallet: -1,
    shield: -1,
    bottle: -1,
  },
  maxItemLevel: {
    sword: 2,
    bow: 2,
    bomb: 2,
    wallet: 2,
    shield: 1,
    bottle: 5,
  },
};

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    resetInventory: () => {
      return initialState;
    },
    addItem: (state, action: PayloadAction<string>) => {
      state.inventory.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.inventory = state.inventory.filter((item) => item !== action.payload);
    },
    incrementItemLevel: (state, action: PayloadAction<keyof ProgressiveItems>) => {
      if (state.itemLevel[action.payload] < state.maxItemLevel[action.payload]) {
        state.itemLevel[action.payload] += 1;
        if (!state.inventory.includes(action.payload)) {
          state.inventory.push(action.payload);
        }
      } else {
        state.itemLevel[action.payload] = -1;
        state.inventory = state.inventory.filter((item) => item !== action.payload);
      }
    },
    decrementItemLevel: (state, action: PayloadAction<keyof ProgressiveItems>) => {
      if (state.itemLevel[action.payload] >= 0) {
        state.itemLevel[action.payload] -= 1;
        if (state.itemLevel[action.payload] === -1) {
          state.inventory = state.inventory.filter((item) => item !== action.payload);
        }
      } else {
        state.itemLevel[action.payload] = state.maxItemLevel[action.payload];
        state.inventory.push(action.payload);
      }
    },
  },
});

export const { resetInventory, addItem, removeItem, incrementItemLevel, decrementItemLevel } =
  inventorySlice.actions;

export const inventoryListSelector = (state: RootState) => state.inventory.inventory;
export const itemLevelSelector = (state: RootState) => state.inventory.itemLevel;

export default inventorySlice.reducer;
