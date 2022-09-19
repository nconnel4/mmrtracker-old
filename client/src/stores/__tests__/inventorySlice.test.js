import reducer, {
  addItem,
  removeItem,
  resetInventory,
  incrementItemLevel,
  decrementItemLevel,
} from '@/stores/inventorySlice';
import { store } from '@/stores/store';

describe('Inventory redux state tests', () => {
  test('Initial inventory state should be set', () => {
    const state = store.getState().inventory;
    expect(state.inventory).toEqual([]);
    expect(state.itemLevel).toEqual({
      sword: -1,
      bow: -1,
      bombs: -1,
      wallet: -1,
      shield: -1,
      bottle: -1,
    });
    expect(state.maxItemLevel).toEqual({
      sword: 2,
      bow: 2,
      bombs: 2,
      wallet: 2,
      shield: 1,
      bottle: 5,
    });
  });
  test('Item should be added to inventory', () => {
    const initialState = { inventory: [] };
    expect(reducer(initialState, addItem('kokiriSword')).inventory).toEqual(['kokiriSword']);
  });
  test('Item should be removed from inventory', () => {
    const initialState = { inventory: ['kokiriSword'] };
    expect(reducer(initialState, removeItem('kokiriSword')).inventory).toEqual([]);
  });
  test('Inventory should be reset to empty list', () => {
    const initialState = { inventory: ['kokiriSword', 'ocarinaOfTime'] };
    expect(reducer(initialState, resetInventory).inventory).toEqual([]);
  });
  test('Item level should be incremented', () => {
    const initialState = { itemLevel: { sword: -1, bow: -1 }, maxItemLevel: { sword: 2, bow: 2 } };
    expect(reducer(initialState, incrementItemLevel('sword')).itemLevel.sword).toEqual(0);
  });
  test('Item level should be decremented', () => {
    const initialState = { itemLevel: { sword: 1, bow: 0 } };
    expect(reducer(initialState, decrementItemLevel('sword')).itemLevel.sword).toEqual(0);
  });
  test('Item level should roll over to lowest if incremented above max', () => {
    const initialState = { itemLevel: { sword: 2, bow: 0 }, maxItemLevel: { sword: 2, bow: 2 } };
    expect(reducer(initialState, incrementItemLevel('sword')).itemLevel.sword).toEqual(-1);
  });
  test('Item level should roll over to highest if decremented below min', () => {
    const initialState = { itemLevel: { sword: -1, bow: -1 }, maxItemLevel: { sword: 2, bow: 2 } };
    expect(reducer(initialState, decrementItemLevel('sword')).itemLevel.sword).toEqual(2);
  });
});
