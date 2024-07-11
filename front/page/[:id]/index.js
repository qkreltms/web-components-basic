const templatePageTodoRead = document.createElement("template");
templatePageTodoRead.innerHTML = `
<div class='page-todo-read'>
</div>
`;

class PageTodoRead extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(templatePageTodoRead.content.cloneNode(true));
    this._render();
  }

  _render() {}
}

window.customElements.define("page-todo-read", PageTodoRead);
