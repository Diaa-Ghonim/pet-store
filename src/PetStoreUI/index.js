export default class PetStoreUI {
  constructor(
    dummyPets,
    cartService,
    purchaseService,
    transactionRecordService
  ) {
    this.$container = document.querySelector('.container');
    this.$header = '';
    this.$content = '';
    this.$logger = '';
    this.$purchaseBtn = '';
    this.$buyerNameInput = '';
    this.dummyPets = dummyPets;
    this.cartService = cartService;
    this.purchaseService = purchaseService;
    this.TransactionRecordService = transactionRecordService;
    this.renderUI();
    this.renderPets();
    this.setupListeners();
  }

  renderUI() {
    this.createHeaderUI();
    this.createContentUI();
    this.createLoggerUI();
    this.$container.appendChild(this.$header);
    this.$container.appendChild(this.$content);
    this.$container.appendChild(this.$logger);
  }

  reRenderPets() {
    this.$content.querySelector('.pets-container').innerHTML = '';
    this.renderPets();
  }

  createHeaderUI() {
    let $header = document.createElement('div');
    $header.classList.add('header');
    let $h1 = document.createElement('h1');
    $h1.innerHTML = 'Pets Store';
    $header.appendChild($h1);
    this.$header = $header;
  }

  createLoggerUI() {
    this.$logger = document.createElement('div');
    this.$logger.classList.add('logger');
  }

  createContentUI() {
    this.$content = document.createElement('div');
    let $buyerNameInputContainer = document.createElement('div');
    this.$buyerNameInput = document.createElement('input');
    this.$buyerNameInput.type = 'text';
    this.$buyerNameInput.placeholder = 'Enter your name';
    $buyerNameInputContainer.appendChild(this.$buyerNameInput);

    let $petsContainer = document.createElement('div');
    $petsContainer.classList.add('pets-container');
    let $purchaseBtnContainer = document.createElement('div');
    $purchaseBtnContainer.classList.add('purchase-btn-container');

    this.$purchaseBtn = document.createElement('button');
    this.$purchaseBtn.classList.add('purchase-btn');
    this.$purchaseBtn.innerText = 'Purchase';
    $purchaseBtnContainer.appendChild(this.$purchaseBtn);
    this.$content.appendChild($buyerNameInputContainer);
    this.$content.appendChild($petsContainer);
    this.$content.appendChild($purchaseBtnContainer);
    this.$content.classList.add('content');
  }

  renderPets() {
    this.dummyPets.map((pet) => {
      let row = document.createElement('div');
      row.classList.add('row');
      let span = document.createElement('span');
      span.innerHTML = pet.name;
      let cartActionBtn = document.createElement('button');
      cartActionBtn.classList.add('cart-action-btn');
      cartActionBtn.innerHTML = 'Add To Cart';
      cartActionBtn.addEventListener('click', (evt) => {
        const currentBtn = evt.target;
        if (currentBtn.innerHTML === 'Add To Cart') {
          this.cartService.addToCart(pet);
          currentBtn.innerHTML = 'Remove From Cart';
        } else {
          this.cartService.removeFromCart(pet.id);
          currentBtn.innerHTML = 'Add To Cart';
        }
      });
      row.appendChild(span);
      row.appendChild(cartActionBtn);
      this.$content.querySelector('.pets-container').appendChild(row);
    });
  }

  renderReportInLogger(purchasedInfo) {
    const report = this.TransactionRecordService.printReport(
      this.getBuyerNameValue(),
      purchasedInfo
    );
    this.$logger.innerHTML += `<p>${report}</p>`;
  }

  resetBuyerNameInput() {
    this.$buyerNameInput.value = '';
  }

  getBuyerNameValue() {
    return this.$buyerNameInput.value;
  }

  setupListeners() {
    this.$purchaseBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      const cart = this.cartService.getCart();
      if (!cart.length > 0 || !this.getBuyerNameValue()) return;
      const purchasedInfo = this.purchaseService.purchase(cart);
      this.renderReportInLogger(purchasedInfo);
      this.cartService.resetCart();
      this.resetBuyerNameInput();
      this.reRenderPets();
    });
  }
}
