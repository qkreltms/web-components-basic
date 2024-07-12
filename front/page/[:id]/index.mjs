const template = document.createElement("template");
template.innerHTML = `
<div class='page-todo-read'>
</div>
`;

class PageTodoRead extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    this._render();
  }

  _render() {}
}

window.customElements.define("page-todo-read", PageTodoRead);
