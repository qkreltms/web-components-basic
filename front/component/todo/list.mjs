import { $api } from "../../api/provider.mjs";
import { navigateTo } from "../../router.mjs";

const template = document.createElement("template");
template.innerHTML = `
  <div class='todo-list'>
    <todo-input></todo-input>
    <ul class='todo-list__list'></ul>
  </div>
  `;

export class TodoList extends HTMLElement {
  constructor() {
    super();
    this._list = [];
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    this.$list = this.querySelector("ul.todo-list__list");
    this.$input = this.querySelector("todo-input");

    this.$input.addEventListener("onSubmit", async (event) => {
      await $api.todo.addTodo({
        content: event.detail,
      });
      this._render();
    });
    this._render();
  }

  async deleteItem(event) {
    const currentTarget = event.currentTarget;
    const item = this._list[event.currentTarget.index];
    await $api.todo.deleteTodo(item.id);
    this._render();
  }

  toggleItem(event) {
    this._render();
  }

  goEditPage(event) {
    const item = this._list[event.detail];
    navigateTo(`/${item.id}/edit`);
  }

  goDetailPage(event) {
    const currentTarget = event.currentTarget;
    const item = this._list[event.currentTarget.index];
    navigateTo(`/${item.id}`);
  }

  async _render() {
    if (!this.$list) return;
    this.$list.innerHTML = "";

    const data = await $api.todo.getTodoList();
    this._list = data;
    this._list.forEach((item, index) => {
      const $item = document.createElement("todo-item");
      $item.setAttribute("text", item.text);
      $item.completed = item.completed;
      $item.index = index;
      $item.addEventListener("onDelete", this.deleteItem.bind(this));
      $item.addEventListener("onToggle", this.toggleItem.bind(this));
      $item.addEventListener("onEdit", this.goEditPage.bind(this));
      $item.addEventListener("click", this.goDetailPage.bind(this));
      this.$list.appendChild($item);
    });
  }
}

window.customElements.define("todo-list", TodoList);
