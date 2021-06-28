import Fish from './index.js';

describe('Fish class', () => {
  it('should instantiate Fish class and check its methods ', () => {
    let fish = new Fish('old fish', 30, 'salmon');
    expect(fish.getName()).toEqual('old fish');
    expect(fish.getPrice()).toEqual(30);
    expect(fish.getGroup()).toEqual('salmon');
  });
});
