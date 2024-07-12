const template = document.createElement("template");
template.innerHTML = `
<div class='page-404'>
  404 NOT FOUND!
</div>
`;

class Page404 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    this._render();
  }

  _render() {}
}

window.customElements.define("page-404", Page404);
