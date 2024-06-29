import { Body, Delete, Get, Post, Req, Res } from '@nestjs/common';
import { ServiceUser } from 'src/service/user.service';

export class ControllerUser {
  constructor(private serviceUser: ServiceUser) {}

  @Post()
  create(@Body() body) {
    this.serviceUser.create(body);
  }

  @Get()
  selectAll(@Res res, @Req req) {}

  @Get()
  selectById(@Res res, @Req req) {}

  @Post()
  update(@Body() body) {}

  @Delete()
  delete(@Body() body) {}
}
