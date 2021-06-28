export default class Pet {
  constructor(name, price, type) {
    this.price = price;
    this.name = name;
    this.type = type;
  }
  getPrice() {
    return this.price;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}
