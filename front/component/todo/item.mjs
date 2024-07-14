const template = document.createElement("template");
template.innerHTML = `
  <li class='todo-item'>
    <input class='todo-item__checkbox' type='checkbox'>
    <label class='todo-item__text'></label>
    <button class='todo-item__edit-btn'>수정</button>
    <button class='todo-item__delete-btn'>삭제</button>
  </li>
  `;

export class TodoItem extends HTMLElement {
  constructor() {
    super();
    this._index = "";
    this._completed = false;
    this._text = "";
    this.$item = null;
    this.$text = null;
    this.$checkbox = null;
    this.$deleteButton = null;
    this.$editButton = null;
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    this.$item = this.querySelector(".todo-item");
    this.$text = this.querySelector(".todo-item__text");
    this.$checkbox = this.querySelector(".todo-item__checkbox");
    this.$deleteButton = this.querySelector(".todo-item__delete-btn");
    this.$editButton = this.querySelector(".todo-item__edit-btn");

    this.$checkbox.addEventListener("click", (event) => {
      event.stopPropagation();
      this.dispatchEvent(
        new CustomEvent("onCompleted", { detail: { event, index: this.index } })
      );
    });
    this.$deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      this.dispatchEvent(
        new CustomEvent("onDelete", { detail: { event, index: this.index } })
      );
    });
    this.$editButton.addEventListener("click", (event) => {
      event.stopPropagation();
      this.dispatchEvent(
        new CustomEvent("onEdit", { detail: { event, index: this.index } })
      );
    });
    this._render();
  }

  static get observedAttributes() {
    return ["text"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "text": {
        if (oldValue !== newValue) {
          this._text = newValue;
        }
        break;
      }
    }
  }

  set index(value) {
    this._index = value;
  }

  get index() {
    return this._index;
  }

  set completed(value) {
    this._completed = Boolean(value);
  }

  get completed() {
    return this.hasAttribute("checked");
  }

  _render() {
    if (!this.$item) return;
    this.$text.textContent = this._text;
    if (this._completed) {
      this.$item.classList.add("--completed");
      this.$checkbox.setAttribute("checked", "");
      return;
    }
    this.$item.classList.remove("--completed");
    this.$checkbox.removeAttribute("checked");
  }
}

window.customElements.define("todo-item", TodoItem);
