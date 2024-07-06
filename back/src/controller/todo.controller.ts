import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { ServiceTodo } from 'src/service/todo.service';

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

  @Post()
  update(@Body() body) {
    return this.serviceTodo.update(body);
  }

  @Delete()
  delete(@Body() body) {
    return this.serviceTodo.delete(body);
  }
}
