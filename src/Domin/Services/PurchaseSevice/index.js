import Dog from '../../Entities/Dog/index.js';
import Fish from '../../Entities/Fish/index.js';

export default class PurchaseService {
  purchase(cart) {
    let totalAmount = 0;
    let purchasedPets = [];
    cart.forEach((element) => {
      if (element.type === 'dog') {
        const dog = new Dog(element.name, element.price, element.bread);
        const price = dog.getPrice();
        totalAmount += price;
        const dogName = dog.getName();
        purchasedPets.push(dogName);
      }
      if (element.type === 'fish') {
        const fish = new Fish(element.name, element.price, element.group);
        const price = fish.getPrice();
        totalAmount += price;
        const fishName = fish.getName();
        purchasedPets.push(fishName);
      }
    });

    return {
      purchasedPets,
      totalAmount,
    };
  }
}
