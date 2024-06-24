import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: { email: string; name?: string; username: string }): Promise<User> {
    return this.userService.createUser(data);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User | null> {
    return this.userService.getUser(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: { email?: string; name?: string; username?: string }): Promise<User> {
    return this.userService.updateUser(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<User> {
    return this.userService.deleteUser(id);
  }
}
