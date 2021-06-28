import Pet from '../Pet/index.js';

export default class Dog extends Pet {
  constructor(name, price, bread) {
    super(name, price, 'dog');
    this.bread = bread;
  }
  getBread() {
    return this.bread;
  }
}
