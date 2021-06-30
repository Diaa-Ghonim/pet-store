import PetStoreUI from './PetStoreUI/index.js';
import { dummyPets } from './dummyPets/index.js';
import CartService from './Domain/Services/CartService/index.js';
import PurchaseService from './Domain/Services/PurchaseService/index.js';
import TransactionRecordService from './Domain/Services/TransactionRecordService/index.js';

new PetStoreUI(
  dummyPets,
  new CartService(),
  new PurchaseService(),
  new TransactionRecordService()
);
