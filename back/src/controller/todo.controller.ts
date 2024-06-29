import { Body, Delete, Get, Post, Req, Res } from '@nestjs/common';
import { ServiceTodo } from 'src/service/todo.service';

export class ControllerTodo {
  constructor(private serviceTodo: ServiceTodo) {}

  @Post()
  create(@Body() body) {
    this.serviceTodo.create(body);
  }

  @Get()
  selectAll() {}

  @Get()
  selectById(@Res res, @Req req) {}

  @Post()
  update(@Body() body) {}

  @Delete()
  delete(@Body() body) {}
}
