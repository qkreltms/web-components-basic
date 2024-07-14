const template = document.createElement("template");
template.innerHTML = `
<div class='page-todo-edit'>
</div>
`;

/**
 * TODO
 * query를 조회하여 특정 투두 상세 표시 및 수정
 */
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
