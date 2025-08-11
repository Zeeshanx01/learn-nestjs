import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {

  @Get() // GET /users OR /users?role=value&age=12
  findAll(@Query() role?: 'INTERN' | 'ADMIN' | 'USER') 
  {
    return [];
  }

  @Get('interns') // GET /users/interns
  findAllInterns() {
    return [];
  }

  @Get(':id') // GET /users/:id //* always put the id route at the end.
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST /users
  create(@Body() user: {}) {
    return user
  }

  @Patch(':id') // PATCH /users/:id 
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // DELETE /users/:id 
  delete(@Param('id') id: string) {
    return { id };
  }

}
