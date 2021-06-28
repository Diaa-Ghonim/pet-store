import Pet from '../Pet/index.js';

export default class Fish extends Pet {
  constructor(name, price, group) {
    super(name, price, 'fish');
    this.group = group;
  }
  getGroup() {
    return this.group;
  }
}
