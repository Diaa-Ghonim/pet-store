import PetStoreUI from './index.js';
import { dummyPets } from '../dummyPets/index.js';
import CartService from '../Domain/Services/CartService/index.js';
import PurchaseService from '../Domain/Services/PurchaseService/index.js';
import TransactionRecordService from '../Domain/Services/TransactionRecordService/index.js';

describe('PetStoreUI class', () => {
  let $container;
  let $header;
  let $content;
  let $logger;

  beforeAll(() => {
    document.body.innerHTML = '<div class=container></div>';
    $container = document.querySelector('.container');
    new PetStoreUI(
      dummyPets,
      new CartService(),
      new PurchaseService(),
      new TransactionRecordService()
    );

    $header = $container.querySelector('.header');
    $content = $container.querySelector('.content');
    $logger = $container.querySelector('.logger');
  });
  it('should render petsStoreUI and $container element has content', () => {
    expect($container.innerHTML).not.toBe('');
  });

  it('should contain div with className header and have h1 with Address inside it', () => {
    expect($header).not.toBe(null);
    expect($header.innerHTML).toBe('<h1>Pets Store</h1>');
  });

  it('should contain div with className content and have input text and  all rows and purchase btn inside it', () => {
    expect($content).not.toBe(null);
    let $buyerNameInput = $content.querySelector('input[type=text]');
    expect($buyerNameInput).not.toBe(null);
    let rows = $content.querySelectorAll('.row');
    expect(rows).toHaveLength(4);
    let $purchaseBtn = $content.querySelector('.purchase-btn');
    expect($purchaseBtn).not.toBe(null);
  });

  it('should contain div with className logger and it is empty', () => {
    expect($logger).not.toBe(null);
    expect($logger.innerHTML).toBe('');
  });

  it('should not do anything if no cart or no buyerName when purchase btn clicked', () => {
    let $purchaseBtn = $content.querySelector('.purchase-btn');
    $purchaseBtn.click();
    let $logger = $container.querySelector('.logger');
    expect($logger.innerHTML).toBe('');
  });

  it('should render report in logger when purchase btn clicked in case of cart values and buyerName value', () => {
    let $purchaseBtn = $content.querySelector('.purchase-btn');
    let $cartActionBtns = $content.querySelectorAll('.cart-action-btn');
    expect($cartActionBtns[0].innerHTML).toBe('Add To Cart');
    $cartActionBtns[0].click();
    expect($cartActionBtns[0].innerHTML).toBe('Remove From Cart');
    let $buyerNameInput = $content.querySelector('input[type=text]');
    $buyerNameInput.value = 'sara';
    $purchaseBtn.click();
    expect($logger.innerHTML).not.toBe('');
    expect($logger.innerHTML).toBe(
      `<p>sara purchased ${dummyPets[0].name} with total amount of 10</p>`
    );
  });
});
