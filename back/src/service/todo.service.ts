import { Injectable } from '@nestjs/common';
import { TodoItem } from 'src/interface/todo.interface';

// todo: CRUD 반복해소 방법
// todo: mapper 구현
// db 연동
@Injectable()
export class ServiceTodo {
  create(todo: TodoItem) {}

  selectAll() {}

  selectById(id: string) {}

  update(todo: TodoItem) {}

  delete(todo: TodoItem) {}
}
