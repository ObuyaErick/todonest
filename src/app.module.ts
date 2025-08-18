import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TodosModule } from './todos/todos.module';
import { BoxalinoAdminMixerModule } from './boxalino-admin-mixer/boxalino-admin-mixer.module';
import { RequestLoggingMiddleware } from './logging/request.logging.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { BoxalinoAdminAudiencesModule } from './boxalino-admin-audiences/boxalino-admin-audiences.module';
import { BoxalinoAdminTokenController } from './boxalino-admin-token/boxalino-admin-token.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@localhost:27017'),
    PrismaModule,
    TodosModule,
    BoxalinoAdminMixerModule,
    BoxalinoAdminAudiencesModule,
  ],
  controllers: [AppController, BoxalinoAdminTokenController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggingMiddleware).forRoutes('*');
  }
}
