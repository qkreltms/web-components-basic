const template = document.createElement("template");
template.innerHTML = `
  <div class='page-todo'>
    <todo-list></todo-list>
  </div>
  `;

export class PageTodo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    this._render();
  }

  _render() {}
}

window.customElements.define("page-todo", PageTodo);
