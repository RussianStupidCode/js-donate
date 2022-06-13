export default class DonateInput {
  #el;
  #input;

  constructor(max = 100, min = 1) {
    this.#el = document.createElement('label');
    this.#el.classList.add('donate-form__input-label');
    
    this.#el.innerHTML = `
      Введите сумму в $ 
      <input class="donate-form__donate-input" name="amount" type="number" max="${max}" min="${min}" required="">
    `

    this.#input = this.#el.querySelector('input');
  }

  get value() {
    return this.#input.value;
  }

  render(parentEl) {
    parentEl.insertAdjacentElement('beforeEnd', this.#el);
  }
}