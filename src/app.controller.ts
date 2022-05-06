import { Controller, Get } from '@nestjs/common';
import { Client, ClientKafka, EventPattern, MessagePattern, Transport } from '@nestjs/microservices';
import { stringify } from 'querystring';
import { animationFrames } from 'rxjs';
import { kafkaSendsService } from './app.service';



@Controller()
export class AppController {
  constructor(private readonly appService: kafkaSendsService) { }

  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'kafkaSample',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'my-kafka-consumer' // Should be the same thing we give in consumer
      }
    }
  })
  
  client: ClientKafka;

  async onModuleInit() {
    // Need to subscribe to topic 
    // so that we can get the response from kafka microservice
    this.client.subscribeToResponseOf('my-first-topic');
    await this.client.connect();
    this.client.emit('my-first-topic', 'Hello Kafka')
    console.log( this.client.emit('my-first-topic', 'Hello Kafka'))
    console.log('init')
  }

  @Get()
  getHello() {
    console.log( this.client.emit('my-first-topic', 'Hello Kafka'))
    return this.client.emit('my-first-topic', 'Hello Kafka'); // args - topic, message1

  }
}

