const templatePageTodo = document.createElement("template");
templatePageTodo.innerHTML = `
  <div class='page-todo'>
    <todo-input></todo-input>
    <todo-list></todo-list>
  </div>
  `;

class PageTodo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(templatePageTodo.content.cloneNode(true));
    this._render();
  }

  _render() {}
}

window.customElements.define("page-todo", PageTodo);
