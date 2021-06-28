export default class TransactionRecordService {
  printReport(buyerName, purchasedInfo) {
    const generatedStringFromPurchasedPetsNames =
      purchasedInfo.purchasedPets.reduce((acc, val) => {
        if (acc === '') {
          return (acc += `${val}`);
        }
        return (acc += ` and ${val}`);
      }, '');

    return `${buyerName} purchased ${generatedStringFromPurchasedPetsNames} with total amount of ${purchasedInfo.totalAmount}`;
  }
}
