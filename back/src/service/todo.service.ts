import { Inject, Injectable } from '@nestjs/common';
import { TodoItem } from 'src/interface/todo.interface';
import { PROVIDER_DB } from 'src/module/db.module';
import { Pool } from 'pg';

// todo: CRUD 반복해소 방법
// todo: mapper 구현
@Injectable()
export class ServiceTodo {
  constructor(@Inject(PROVIDER_DB) private db: Pool) {}

  async create(todo: TodoItem) {
    // TODO: 유저 정보는 추후 토큰으로 대체
    await this.db.query(`INSERT INTO "todo" (user_id, text, completed) VALUES(${1}, '${todo.content}', ${!!todo.isCompleted});`);
    return todo;
  }

  async selectAll() {
    const res = await this.db.query('SELECT * FROM "todo"');
    return res.rows;
  }

  async selectById(id: string) {
    const res = await this.db.query(`SELECT * FROM "todo" WHERE id=${id}`);
    return res.rows;
  }

  update(todo: TodoItem) {}

  async delete(id: string) {
    const res = await this.db.query(`DELETE FROM "todo" WHERE id=${id}`);
    return res.rows;
  }
}
