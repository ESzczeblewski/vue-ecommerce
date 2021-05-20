import { getters } from '@/store';

const { sorting } = getters;

describe('states', () => {
  it('returns default', () => {
    const state = { sorting: 'default' };

    const actual = sorting(state);

    expect(actual).toBe('default');
  });
});
