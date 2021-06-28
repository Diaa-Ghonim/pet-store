export default class CartService {
  constructor() {
    this.cart = [];
  }

  addToCart(item) {
    this.cart.push(item);
  }

  removeFromCart(id) {
    this.cart = this.cart.filter((item) => item.id !== id);
  }

  getCart() {
    return this.cart;
  }

  resetCart() {
    this.cart = [];
  }
}
