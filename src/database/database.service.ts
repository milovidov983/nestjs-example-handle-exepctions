import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './models/user.model';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async insert(user: User): Promise<number> {
    const insertResult = await this.usersRepository.insert(user);
    return insertResult.identifiers[0].id;
  }

  async update(user: User): Promise<void> {
    await this.usersRepository.update({ id: user.id }, user);
  }
}
