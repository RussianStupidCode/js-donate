import DonateListItem from "./DonateListItem";
import DonatesList from "./DonatesList";

export default class DonateContainer {
  #el;
  #donatesList;
  
  constructor() {
    this.#el = document.createElement('div');
    this.#el.classList.add('donates-container');

    this.#el.innerHTML = '<h2 class="donates-container__title">Список донатов</h2>';
    this.#donatesList = new DonatesList();
  }

  render(parentEl) {
    this.#donatesList.render(this.#el);
    parentEl.insertAdjacentElement('beforeEnd', this.#el);
  }

  addDonate(date, countItem) {
    const donateItem = new DonateListItem(date, countItem);
    this.#donatesList.addItem(donateItem);
  }
}