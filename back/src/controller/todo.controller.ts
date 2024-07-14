import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { ServiceTodo } from 'src/service/todo.service';

// todo: mapper 구현
@Controller('todo')
export class ControllerTodo {
  constructor(private serviceTodo: ServiceTodo) {}

  @Post()
  create(@Body() body) {
    return this.serviceTodo.create(body);
  }

  @Get()
  selectAll() {
    return this.serviceTodo.selectAll();
  }

  @Get(':id')
  selectById(@Param('id') id: string) {
    return this.serviceTodo.selectById(id);
  }

  @Patch()
  update(@Body() body) {
    return this.serviceTodo.update(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.serviceTodo.delete(id);
  }
}
