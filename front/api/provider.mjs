import OFetch from "./fetch.mjs";
import ApiTodoService from "./service/todo.mjs";
import ApiUserService from "./service/user.mjs";

class ApiProvider {
  _ofetch = new OFetch();

  constructor() {
    this.init();
  }

  get todo() {
    return this._todoService;
  }

  get user() {
    return this._userService;
  }

  initServices() {
    this._userService = new ApiUserService(this._ofetch);
    this._todoService = new ApiTodoService(this._ofetch);
  }

  init() {
    this.initServices();
  }
}

export const $api = new ApiProvider();
