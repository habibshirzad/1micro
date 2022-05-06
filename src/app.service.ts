import { Injectable } from '@nestjs/common';
import { Client, ClientKafka } from '@nestjs/microservices';


@Injectable()
export class kafkaSendsService {
  
  getHello(): string {
    return 'Hello World!';
  }
}
