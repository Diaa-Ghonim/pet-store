import PetStoreUI from './PetStoreUI/index.js';
import { dummyPets } from './dummyPets/index.js';
import CartService from './CartService/index.js';
import PurchaseService from './PurchaseSevice/index.js';
import TransactionRecordService from './TransacationRecordService/index.js';

new PetStoreUI(
  dummyPets,
  new CartService(),
  new PurchaseService(),
  new TransactionRecordService()
);
