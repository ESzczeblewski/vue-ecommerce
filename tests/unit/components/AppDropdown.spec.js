import { mount } from '@vue/test-utils';
import AppDropdown from '@/components/AppDropdown.vue';

let wrapper = null;

beforeEach(() => {
  wrapper = mount(AppDropdown, {});
});

afterEach(() => {
  wrapper.destroy();
});

describe('AppDropdown', () => {
  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('changes active state after click', async () => {
    const dropdown = wrapper.find('div');

    expect(wrapper.vm.$data.sharedState.active).toBe(false);
    await dropdown.trigger('click');
    expect(wrapper.vm.$data.sharedState.active).toBe(true);
  });
});
