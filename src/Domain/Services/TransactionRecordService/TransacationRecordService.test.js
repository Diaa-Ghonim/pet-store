import TransactionRecordService from './index.js';

describe('TransactionRecordService class', () => {
  it('should instantiate TransactionRecordService and printReport when printReport method called', () => {
    let transactionRecordService = new TransactionRecordService();
    const report = transactionRecordService.printReport('sara', {
      totalAmount: 100,
      purchasedPets: ['salmonFish', 'americanDog'],
    });
    expect(report).toBe(
      'sara purchased salmonFish and americanDog with total amount of 100'
    );
  });
});
