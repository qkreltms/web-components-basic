import { Injectable } from '@nestjs/common';
import { User } from 'src/interface/user.interface';

@Injectable()
export class ServiceUser {
  create(todo: User) {}

  selectAll() {}

  selectById(id: string) {}

  update(todo: User) {}

  delete(todo: User) {}
}
