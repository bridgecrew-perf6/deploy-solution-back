import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {MessageEntity} from "./entity/message.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3308,
    username: 'root',
    password: 'test',
    database: 'test',
    entities: [MessageEntity],
    synchronize: true,
  }),TypeOrmModule.forFeature([MessageEntity])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
