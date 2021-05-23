import { mount } from '@vue/test-utils';
import Product from '@/components/Product.vue';

let wrapper = null;

const product = {
  id: 18,
  title: 'Bell Flare Jeans In Clean Black With Thigh Rips',
  img: '/img/w-jeans1-big.7f8c8bda.jpg',
  imgHover: '/img/w-jeans1-big2.23119aad.jpg',
  price: 22.00,
  sex: 'w',
  category: 'Jeans',
  info: [
    '50% Real Leather, 50% Textile upper',
    'Matte, distressed finish',
    'Apron toe',
    'Slip-on style',
  ],
};

beforeEach(() => {
  wrapper = mount(Product, {
    data() {
      return {
        showBtn: false,
      };
    },
    propsData: {
      product,
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Product', () => {
  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('displays correct product info', () => {
    expect(wrapper.find('.product__category').text()).toBe('Jeans');

    expect(wrapper.find('.product__title').text()).toBe('Bell Flare Jeans In Clean Black With Thigh Rips');

    expect(wrapper.find('.product__price').text()).toBe('$22.00');
  });

  it('changes img src on hover', async () => {
    const img = wrapper.find('img');

    expect(img.attributes().src).toBe('/img/w-jeans1-big.7f8c8bda.jpg');

    await wrapper.find('div').trigger('mouseenter');

    expect(img.attributes().src).toBe('/img/w-jeans1-big2.23119aad.jpg');

    await wrapper.find('div').trigger('mouseleave');

    expect(img.attributes().src).toBe('/img/w-jeans1-big.7f8c8bda.jpg');
  });

  it('shows/hides buy button', async () => {
    const buyBtn = wrapper.find('button');

    expect(buyBtn.isVisible()).toBe(false);

    await wrapper.find('div').trigger('mouseenter');

    expect(buyBtn.isVisible()).toBe(true);

    await wrapper.find('div').trigger('mouseleave');

    expect(buyBtn.isVisible()).toBe(false);
  });
});
