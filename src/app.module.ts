import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TodosModule } from './todos/todos.module';
import { BoxalinoAdminMixerModule } from './boxalino-admin-mixer/boxalino-admin-mixer.module';

@Module({
  imports: [PrismaModule, TodosModule, BoxalinoAdminMixerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
