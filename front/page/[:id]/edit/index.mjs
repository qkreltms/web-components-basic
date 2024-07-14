import { $api } from "../../../api/provider.mjs";
import { navigateTo, useRoute } from "../../../router.mjs";

const template = document.createElement("template");
template.innerHTML = `
<div class='page-todo-edit'>
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
  <footer>
    <button class='page-todo-edit__save-btn'>저장</button>
    <button class='page-todo-edit__cancel-btn'>취소</button>
  </footer>
</div>
`;

class PageTodoEdit extends HTMLElement {
  constructor() {
    super();
    this.$tableBody = null;
    this.$saveBtn = null;
    this.$cancelBtn = null;
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    this.$tableBody = this.querySelector(".page-todo-edit tbody");
    this.$saveBtn = this.querySelector(".page-todo-edit__save-btn");
    this.$cancelBtn = this.querySelector(".page-todo-edit__cancel-btn");

    this.$saveBtn.addEventListener("click", async () => {
      const text = this.$tableBody.querySelector("textarea[name='text']").value;
      const completed = this.$tableBody.querySelector(
        "input[name='completed']"
      ).checked;
      const { param: id } = useRoute();
      await $api.todo.updateTodo({ id, text, completed });
      navigateTo(-1);
    });
    this.$cancelBtn.addEventListener("click", async () => {
      navigateTo(-1);
    });

    window.addEventListener("beforeunload", this.preventClose);

    this._render();
  }

  disconnectedCallback() {
    window.removeEventListener("beforeunload", this.preventClose);
  }

  preventClose(event) {
    event.preventDefault();
    event.returnValue = "";
  }

  async _render() {
    const { param } = useRoute();
    const data = await $api.todo.getTodoById(param);
    this.$tableBody.innerHTML = `
      <td>${data.id}</tb>
      <td>${data.user_id}</tb>
      <td><textarea rows="5" name='text'>${data.text}</textarea></tb>
      <td>${data.updated_at ? new Date(data.updated_at).toLocaleString() : '-'}</tb>
      <td>${new Date(data.created_at).toLocaleString()}</tb>
      <td><input name='completed' ${
        data.completed ? 'checked=""' : ""
      } value='${data.completed}' type='checkbox'></tb>
    `;
  }
}

window.customElements.define("page-todo-edit", PageTodoEdit);
