import CartService from './index.js';

describe('Cart class', () => {
  let cartService;
  const item = { id: 1, name: 'anything' };
  beforeAll(() => {
    cartService = new CartService();
  });
  it('should add item to cart', () => {
    cartService.addToCart(item);
    expect(cartService.getCart()).toHaveLength(1);
    expect(cartService.getCart()).toContain(item);
  });

  it('should remove item from cart', () => {
    cartService.removeFromCart(1);
    expect(cartService.getCart()).toHaveLength(0);
  });

  it('should return cart array of items when getCartMethodCalled', () => {
    cartService.addToCart(item);
    expect(cartService.getCart()).toEqual([item]);
  });
});
