export default class ApiTodoService {
  constructor(provider) {
    this._api = provider;
  }

  getTodoList() {
    return this._api.get("/todo");
  }

  getTodoById(id) {
    return this._api.get(`/todo/${id}`);
  }

  addTodo(data) {
    return this._api.post("/todo", data);
  }

  updateTodo(id, data) {
    return this._api.patch(`/todo/${id}`, data);
  }

  deleteTodo(id) {
    return this._api.delete(`/todo/${id}`);
  }
}
