import PetStoreUI from './PetStoreUI/index.js';
import { dummyPets } from './dummyPets/index.js';
import CartService from './Domin/Services/CartService/index.js';
import PurchaseService from './Domin/Services/PurchaseSevice/index.js';
import TransactionRecordService from './Domin/Services/TransacationRecordService/index.js';

new PetStoreUI(
  dummyPets,
  new CartService(),
  new PurchaseService(),
  new TransactionRecordService()
);
