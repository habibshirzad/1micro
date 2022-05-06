import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { kafkaSendsService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [kafkaSendsService],
})
export class AppModule {}
