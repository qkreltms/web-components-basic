const template = document.createElement("template");
template.innerHTML = `
  <li class='todo-item'>
    <input class='todo-item__checkbox' type='checkbox'>
    <label class='todo-item__text'></label>
    <button class='todo-item__edit-btn'>수정</button>
    <button class='todo-item__remove-btn'>삭제</button>
  </li>
  `;

/**
 * TODO
 * 투두 텍스트와 날짜, 완료 여부 표시
 * 투두 클릭시 페이지 이동, 투두 연필 클릭시 상세 페이지 이동
 */
export class TodoItem extends HTMLElement {
  constructor() {
    super();
    this._key = "";
    this._completed = false;
    this._text = "";
    this.$item = null;
    this.$text = null;
    this.$checkbox = null;
    this.$removeButton = null;
    this.$editButton = null;
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    this.$item = this.querySelector(".todo-item");
    this.$text = this.querySelector(".todo-item__text");
    this.$checkbox = this.querySelector(".todo-item__checkbox");
    this.$removeButton = this.querySelector(".todo-item__remove-btn");
    this.$editButton = this.querySelector(".todo-item__edit-btn");

    this.$checkbox.addEventListener("click", (event) => {
      event.stopPropagation();
      this.dispatchEvent(new CustomEvent("onToggle", { key: this.key }));
    });
    this.$removeButton.addEventListener("click", (event) => {
      event.stopPropagation();
      this.dispatchEvent(new CustomEvent("onRemove", { key: this.key }));
    });
    this.$editButton.addEventListener("click", (event) => {
      event.stopPropagation();
      this.dispatchEvent(
        new CustomEvent("onEdit", { detail: { key: this.key } })
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

  set key(value) {
    this._key = value;
  }

  get key() {
    return this._key;
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
