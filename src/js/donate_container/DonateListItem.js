import DateConverter from '../DateConverter';

export default class DonateListItem {
  #el;

  constructor(date, countItem) {
    this.#el = document.createElement('div');
    this.#el.classList.add('donate-item');
    
    const dateString = DateConverter.dateToString(date);

    this.#el.innerHTML = `${dateString} - <b>${countItem}$</b>`;
  }

  render(parentEl) {
    parentEl.insertAdjacentElement('beforeEnd', this.#el);
  }
}