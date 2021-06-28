import PurchaseService from './index.js';

describe('PurchaseService class', () => {
  let purchaseService;
  beforeAll(() => {
    purchaseService = new PurchaseService();
  });

  it('should  return empty purchased info if no cart items', () => {
    let fakeCart = [];
    const purchasedInfo = purchaseService.purchase(fakeCart);
    expect(purchasedInfo).toEqual({
      totalAmount: 0,
      purchasedPets: [],
    });
  });

  it('should return purchased info when cart items exist', () => {
    let fakeCart = [
      {
        id: 1,
        type: 'dog',
        name: 'american dog',
        price: 10,
        bread: 'breadG',
      },
      {
        id: 3,
        type: 'fish',
        name: 'salmon fish',
        price: 10,
        group: 'salmon',
      },
    ];
    const purchasedInfo = purchaseService.purchase(fakeCart);
    expect(purchasedInfo).toEqual({
      totalAmount: 20,
      purchasedPets: ['american dog', 'salmon fish'],
    });
  });
});
