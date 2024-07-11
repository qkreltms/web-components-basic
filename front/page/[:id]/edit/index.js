const templatePageTodoEdit = document.createElement("template");
templatePageTodoEdit.innerHTML = `
<div class='page-todo-edit'>
</div>
`;

class PageTodoEdit extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(templatePageTodoEdit.content.cloneNode(true));
    this._render();
  }

  _render() {}
}

window.customElements.define("page-todo-edit", PageTodoEdit);
