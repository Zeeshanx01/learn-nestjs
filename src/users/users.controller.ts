// src\users\users.controller.ts

import { Controller, Get, Param, Post, Body, Patch, Delete, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatedUserDto } from './dto/update-user.dto';
@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) { }

  @Get() // GET /users OR /users?role=value&age=12
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'USER') {
    return this.usersService.findAll(role);
  }

  @Get('interns') // GET /users/interns
  findAllInterns() {
    return [];
  }

  @Get(':id') // GET /users/:id //* always put the id route at the end.
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post() // POST /users
  create(@Body(ValidationPipe) user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @Patch(':id') // PATCH /users/:id 
  update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) userUpdate: UpdatedUserDto) {
    return this.usersService.update(id, userUpdate);
  }

  @Delete(':id') // DELETE /users/:id 
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }

}