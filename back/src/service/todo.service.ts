import { Inject, Injectable } from '@nestjs/common';
import { TodoItem } from 'src/interface/todo.interface';
import { PROVIDER_DB } from 'src/module/db.module';
import { Pool } from 'pg';

// todo: CRUD 반복해소 방법
@Injectable()
export class ServiceTodo {
  constructor(@Inject(PROVIDER_DB) private db: Pool) {}

  async create(todo: TodoItem) {
    // TODO: 유저 정보는 추후 토큰으로 대체
    await this.db.query(
      `INSERT INTO "todo" (user_id, text, completed) VALUES($1, $2, $3);`,
      [1, todo.text, Boolean(todo.completed)],
    );
    return todo;
  }

  async selectAll() {
    const res = await this.db.query(
      'SELECT * FROM "todo" ORDER BY created_at DESC, id DESC',
    );
    return res.rows;
  }

  async selectById(id: string) {
    const res = await this.db.query(
      `SELECT * FROM "todo" WHERE id= $1 LIMIT 1`,
      [id],
    );
    return res.rows[0];
  }

  async update(todo: TodoItem) {
    const res = await this.db.query(
      'UPDATE "todo" SET text = $1, completed = $2 WHERE id = $3',
      [todo.text, todo.completed, todo.id],
    );
    return res.rows;
  }

  async delete(id: string) {
    const res = await this.db.query(`DELETE FROM "todo" WHERE id=${id}`);
    return res.rows;
  }
}
