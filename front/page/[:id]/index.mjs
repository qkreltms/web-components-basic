import { $api } from "../../api/provider.mjs";
import { useRoute } from "../../router.mjs";

const template = document.createElement("template");
template.innerHTML = `
<div class='page-todo-read'>
  <table>
    <thead>
      <th>id</th>
      <th>userId</th>
      <th>text</th>
      <th>updatedAt</th>
      <th>createdAt</th>
      <th>completed</th>
    </thead>
    <tbody>
    </tbody>
  </table>
</div>
`;

class PageTodoRead extends HTMLElement {
  constructor() {
    super();
    this.$tableBody = null;
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    this.$tableBody = this.querySelector(".page-todo-read tbody");
    this._render();
  }

  async _render() {
    const { param } = useRoute();
    const data = await $api.todo.getTodoById(param);
    this.$tableBody.innerHTML = `
      <td>${data.id}</tb>
      <td>${data.user_id}</tb>
      <td>${data.text}</tb>
      <td>${data.updated_at ? new Date(data.updated_at).toLocaleString() : '-'}</tb>
      <td>${new Date(data.created_at).toLocaleString()}</tb>
      <td>${data.completed}</tb>
    `;
  }
}

window.customElements.define("page-todo-read", PageTodoRead);
