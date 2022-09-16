import reducer, { addItem, removeItem, resetInventory } from '@/stores/inventorySlice';
import { store } from '@/stores/store';

describe('Inventory redux state tests', () => {
  test('Initial inventory should be empty list', () => {
    const state = store.getState().inventory;
    expect(state).toEqual([]);
  });
  test('Item should be added to inventory', () => {
    const inventory = [];
    expect(reducer(inventory, addItem('kokiriSword'))).toEqual(['kokiriSword']);
  });
  test('Item should be removed from inventory', () => {
    const inventory = ['kokiriSword'];
    expect(reducer(inventory, removeItem('kokiriSword'))).toEqual([]);
  });
  test('Inventory should be reset to empty list', () => {
    const inventory = ['kokiriSword', 'ocarinaOfTime'];
    expect(reducer(inventory, resetInventory)).toEqual([]);
  });
});
