import TransacationRecordService from './index.js';

describe('TransacationRecordService class', () => {
  it('should instantiate transacationRecordService and printReport when printReport method called', () => {
    let transacationRecordService = new TransacationRecordService();
    const report = transacationRecordService.printReport('sara', {
      totalAmount: 100,
      purchasedPets: ['salmonFish', 'americanDog'],
    });
    expect(report).toBe(
      'sara purchased salmonFish and americanDog with total amount of 100'
    );
  });
});
