const template = document.createElement("template");
template.innerHTML = `
<div class='page-todo-edit'>
</div>
`;

class PageTodoEdit extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    this._render();
  }

  _render() {}
}

window.customElements.define("page-todo-edit", PageTodoEdit);
