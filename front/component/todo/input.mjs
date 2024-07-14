const template = document.createElement("template");
template.innerHTML = `
  <div class='todo-input'>
  </div>
  `;

  /**
   * TODO 값을 입력받아서 해당 투두에 저장
   */
export class TodoInput extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    this._render();
  }

  _render() {}
}

window.customElements.define("todo-input", TodoInput);
