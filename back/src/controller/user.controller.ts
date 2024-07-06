import { Body, Controller, Delete, Get, Param, Post, Req, Res } from '@nestjs/common';
import { ServiceUser } from 'src/service/user.service';

@Controller('user')
export class ControllerUser {
  constructor(private serviceUser: ServiceUser) {}

  @Post()
  create(@Body() body) {
    this.serviceUser.create(body);
  }

  @Get()
  selectAll() {
    return this.serviceUser.selectAll();
  }

  @Get(':id')
  selectById(@Param('id') id: string) {
    return this.serviceUser.selectById(id);
  }

  @Post()
  update(@Body() body) {}

  @Delete()
  delete(@Body() body) {}
}
