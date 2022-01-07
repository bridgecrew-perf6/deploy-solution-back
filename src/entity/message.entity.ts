import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('message')
export class MessageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;
}
