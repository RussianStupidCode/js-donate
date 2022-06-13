import Button from "./button";
import DonateInput from "./DonateInput";

export default class DonateForm {
  #el;
  #totalAmountEl;
  #input;
  #button;
  
  constructor() {
    this.#el = document.createElement('form');
    this.#el.classList.add('donate-form');

    this.#totalAmountEl = document.createElement('h1');
    this.#totalAmountEl.setAttribute('id', 'total-amount');
    this.#totalAmountEl.textContent = '0.00$';
    this.#el.insertAdjacentElement('beforeEnd', this.#totalAmountEl);

    this.#input = new DonateInput();
    this.#button = new Button('donate-form__submit-button', 'submit', 'Задонатить');

    this.#input.render(this.#el);
    this.#button.render(this.#el);
  }

  #addAmount(amount) {
    let totalAmount = Number(this.#totalAmountEl.textContent.match(/(.+)\$/)[1]);
    totalAmount += amount;
    this.#totalAmountEl.textContent = `${totalAmount.toFixed(2)}$`;
  }

  addSumbitListener(callback) {
    this.#button.addClickListener(() => {
      const amount = Number(this.#input.value);

      if (amount === 0) {
        return;
      }

      callback();
      this.#addAmount(amount);
    });
  }

  get donateAmount() {
    return this.#input.value;
  }

  render(parentEl) {
    parentEl.insertAdjacentElement('beforeEnd', this.#el);
  }
}