export default class DonatesList {
  #el;
  #items;

  constructor() {
    this.#el = document.createElement('div');
    this.#el.classList.add('donates-container__donates');

    this.#items = [];
  }

  addItem(listItem) {
    this.#items.push(listItem);
    this.#items.at(-1).render(this.#el);
  }

  render(parentEl) {
    this.#items.forEach((el) => el.render(this.#el));
    parentEl.insertAdjacentElement('beforeEnd', this.#el);
  }
}