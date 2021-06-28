import Pet from './index.js';

describe('Pet class', () => {
  it('should instantiate Pet class and check its methods ', () => {
    let pet = new Pet('America Dog', 100, 'dog');
    expect(pet.getName()).toEqual('America Dog');
    expect(pet.getPrice()).toEqual(100);
    expect(pet.getType()).toEqual('dog');
  });
});
