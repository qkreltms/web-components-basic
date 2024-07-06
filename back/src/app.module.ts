import { Module } from '@nestjs/common';
import { ControllerTodo } from './controller/todo.controller';
import { ServiceTodo } from './service/todo.service';
import { ControllerUser } from './controller/user.controller';
import { ServiceUser } from './service/user.service';
import { DbModule } from './module/db.module';

@Module({
  imports: [DbModule],
  controllers: [ControllerTodo, ControllerUser],
  providers: [ServiceTodo, ServiceUser],
})
export class AppModule {}
