import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.init()
}





// // sender
// async function bootstrap() {
//   const app = await NestFactory.create(
//     {AppModule,
//       })
//   // app.startAllMicroservices();
//   app.init();
//   //app.init();
//   }
bootstrap();
