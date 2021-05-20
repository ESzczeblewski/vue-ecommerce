import { mutations } from '@/store/';

const { setSorting, resetSorting } = mutations;

describe('mutations', () => {
  it('sets given sorting algorithm', () => {
    const state = { sorting: 'default' };

    setSorting(state, 'priceHighToLow');

    expect(state.sorting).toBe('priceHighToLow');
  });
  it('reset sorting algorithm to default', () => {
    const state = { sorting: 'priceHighToLow' };

    resetSorting(state);

    expect(state.sorting).toBe('default');
  });
});
