import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TodosModule } from './todos/todos.module';
import { BoxalinoAdminMixerModule } from './boxalino-admin-mixer/boxalino-admin-mixer.module';
import { RequestLoggingMiddleware } from './logging/request.logging.middleware';

@Module({
  imports: [PrismaModule, TodosModule, BoxalinoAdminMixerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggingMiddleware).forRoutes('*');
  }
}
