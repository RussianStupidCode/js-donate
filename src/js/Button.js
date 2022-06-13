export default class Button {
  #el;
  #listeners;

  constructor(className, type, textContent) {
    this.#el = document.createElement('button');
    this.#el.classList.add(className);  
    this.#el.textContent = textContent;
    this.#el.setAttribute('type', type);

    this.#listeners = [];

    this.#el.addEventListener('click', (event) => {
      this.click(event);
    });
  }

  addClickListener(callback) {
    this.#listeners.push(callback);
  }

  click(event) {
    event.preventDefault();
    this.#listeners.forEach((o) => o.call(null));
  }

  render(parentEl) {
    parentEl.insertAdjacentElement('beforeEnd', this.#el);
  }
}