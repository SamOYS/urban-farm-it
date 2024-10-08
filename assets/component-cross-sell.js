class CrossSellElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.initVariantSelect();
    this.initQuantityChange();
  }

  initVariantSelect() {
    this.querySelectorAll('.cross-sell__variant-select').forEach((select) => {
      select.addEventListener('change', this.handleVariantChange.bind(this));
    });
  }

  initQuantityChange() {
    this.querySelectorAll('.js-qty__num').forEach((input) => {
      input.addEventListener('change', () => {
        this.updateCheckboxQuantity(input);
      });
    });

    this.querySelectorAll('.js-qty__adjust--minus, .js-qty__adjust--plus').forEach((button) => {
      button.addEventListener('click', () => {
        const quantityInput = button.parentElement.querySelector('.js-qty__num');
        this.updateCheckboxQuantity(quantityInput);
      });
    });
  }

  handleVariantChange(event) {
    const option = event.target.options[event.target.selectedIndex];
    const price = option.dataset.price;
    const variantId = option.value;

    const productDetails = event.target.closest('.cross-sell__product-details');
    const checkbox = productDetails.querySelector('.cross-sell__checkbox');
    checkbox.value = variantId;
    checkbox.dataset.price = price;

    const priceDisplay = productDetails.querySelector('.cross-sell__product-price');
    priceDisplay.textContent = price;
  }

  updateCheckboxQuantity(quantityInput) {
    const productDetails = quantityInput.closest('.cross-sell__product-details');
    const checkbox = productDetails.querySelector('.cross-sell__checkbox');
    let defaultQuantity = 1;
    checkbox.dataset.quantity = defaultQuantity + parseInt(quantityInput.value);
  }
}

customElements.define('cross-sell', CrossSellElement);
