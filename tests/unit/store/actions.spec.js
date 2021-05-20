import { actions } from '@/store';

const { SET_SORTING } = actions;

describe('actions', () => {
  it('set received sorting algorithm', () => {
    const commit = jest.fn();
    const sorting = 'default';

    SET_SORTING({ commit }, sorting);

    expect(commit).toHaveBeenLastCalledWith('setSorting', 'default');
  });
});
