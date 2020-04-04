import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { DatabaseService } from './database/database.service';
import { User } from './database/models/user.model';

@Controller()
export class AppController {
  constructor(private databaseService: DatabaseService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return await this.databaseService.findAll();
  }

  @Post()
  async insertUser(@Body() user: User): Promise<number> {
    return await this.databaseService.insert(user);
  }

  @Patch()
  async updateUser(@Body() user: User) {
    await this.databaseService.update(user);
  }
}
