class ProductBundleElement extends HTMLElement {
  constructor() {
    super();
    this.isAdded = false;
    this.selectedProductId = null;
    this.selectedVariantId = null;
    this.quantity = 1;
    this.init();
  }

  init() {
    const variantDataElement = this.querySelector('script[type="application/json"]');
    this.variantData = JSON.parse(variantDataElement.textContent);

    this.productSelect = this.querySelector('#bundle-product-select');
    this.variantSelect = this.querySelector('#bundle-variant-select');
    this.quantityInput = this.querySelector('.bundle__product-qty input');
    this.quantityBtns = this.querySelectorAll('.bundle__product-qty button');
    this.priceDisplay = this.querySelector('.product-bundle__price');
    this.imageDisplay = this.querySelector('.product-bundle__image-container img');
    this.addButton = this.querySelector('.bundle-details__btn');

    this.updateVariantSelect();
    this.updateDisplay();

    this.productSelect.addEventListener('change', () => {
      this.updateVariantSelect();
      this.updateDisplay();
    });

    this.quantityInput.addEventListener('change', () => {
      this.updateQuantity();
    });

    this.quantityBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.updateQuantity();
      });
    });

    if (this.variantSelect) {
      this.variantSelect.addEventListener('change', () => {
        this.updateDisplay();
      });
    }

    this.addButton.addEventListener('click', () => {
      this.toggleAddState();
    });
  }

  updateVariantSelect() {
    const selectedProductId = this.productSelect.value;
    const variants = this.variantData[selectedProductId];

    if (this.variantSelect && variants) {
      this.variantSelect.innerHTML = '';

      variants.forEach((variant) => {
        const option = document.createElement('option');
        option.value = variant.id;
        option.textContent = variant.title;
        this.variantSelect.appendChild(option);
      });

      this.selectedVariantId = variants[0].id;
    }
  }

  updateQuantity() {
    this.quantity = this.quantityInput.value;
  }

  updateDisplay() {
    const selectedProductId = this.productSelect.value;
    if (selectedProductId) {
      const selectedProductImage =
        this.productSelect.selectedOptions[0].getAttribute('data-product-image');
      this.imageDisplay.src = selectedProductImage;
      this.selectedProductId = selectedProductId;

      if (this.variantSelect && this.variantSelect.value) {
        const selectedVariantId = this.variantSelect.value;
        this.selectedVariantId = selectedVariantId;
      }

      const selectedVariant = this.variantData[selectedProductId].find(
        (variant) => variant.id.toString() === this.selectedVariantId
      );
      this.priceDisplay.textContent = `(+${selectedVariant.price})`;
    }
  }

  toggleAddState() {
    this.isAdded = !this.isAdded;
    this.addButton.textContent = this.isAdded ? 'Added' : 'Add';
    this.addButton.classList.toggle('active');

    if (this.isAdded) {
      this.quantity = this.quantityInput.value;
      console.log(
        `Added: Product ID - ${this.selectedProductId}, Variant ID - ${this.selectedVariantId}, Quantity - ${this.quantity}`
      );
    }
  }
}

customElements.define('product-bundle', ProductBundleElement);
