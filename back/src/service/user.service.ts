import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { User } from 'src/interface/user.interface';
import { PROVIDER_DB } from 'src/module/db.module';

@Injectable()
export class ServiceUser {
  constructor(@Inject(PROVIDER_DB) private db: Pool) {}

  create(todo: User) {}

  async selectAll() {
    const res = await this.db.query('SELECT * FROM "user"');
    return res.rows;
  }

  async selectById(id: string) {
    const res = await this.db.query(`SELECT * FROM "user" WHERE id=${id}`);
    return res.rows;
  }

  update(todo: User) {}

  delete(todo: User) {}
}
