const template = document.createElement("template");
template.innerHTML = `
  <form class='todo-input'>
    <input class='todo-input__input' placeholder='오늘 할일은...?'>
    <button class='todo-input__submit' type='submit'>추가</button>
  </form>
  `;

export class TodoInput extends HTMLElement {
  constructor() {
    super();
    this.$input = null;
    this.$submit = null;
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    this.$input = this.querySelector("input.todo-input__input");
    this.$form = this.querySelector(".todo-input");

    this.$form.addEventListener("submit", (event) => {
      if (!this.$input.value) return;
      event.preventDefault();
      this.dispatchEvent(
        new CustomEvent("onSubmit", { detail: this.$input.value })
      );
      this.$input.value = "";
    });
    this._render();
  }

  _render() {}
}

window.customElements.define("todo-input", TodoInput);
