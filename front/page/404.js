const templatePage404 = document.createElement("template");
templatePage404.innerHTML = `
<div class='page-404'>
  404 NOT FOUND!
</div>
`;

class Page404 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(templatePage404.content.cloneNode(true));
    this._render();
  }

  _render() {}
}

window.customElements.define("page-404", Page404);
