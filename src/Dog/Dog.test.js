import Dog from './index.js';

describe('Dog class', () => {
  it('should instantiate dog class and check its methods ', () => {
    let dog = new Dog('old dog', 50, 'bread');
    expect(dog.getName()).toEqual('old dog');
    expect(dog.getPrice()).toEqual(50);
    expect(dog.getBread()).toEqual('bread');
  });
});
