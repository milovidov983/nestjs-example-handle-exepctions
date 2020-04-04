import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'Users',
})
export class User {
  constructor(data?: Partial<User>) {
    Object.assign(this, data);
  }

  @PrimaryGeneratedColumn({
    name: 'Id',
    type: 'int',
  })
  id: number;

  @Column({
    name: 'Name',
    type: 'text',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'Email',
    type: 'text',
    nullable: false,
  })
  email: string;
}
