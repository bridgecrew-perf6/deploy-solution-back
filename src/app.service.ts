import { Injectable } from '@nestjs/common';
import { MessageEntity } from './entity/message.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(MessageEntity)
    private messageRepository: Repository<MessageEntity>,
  ) {}

  getMessage(): Promise<MessageEntity> {
    return this.messageRepository.findOne();
  }
}
