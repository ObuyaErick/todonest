import { Module } from '@nestjs/common';
import { BoxalinoAdminMixerController } from './boxalino-admin-mixer.controller';
import { BoxalinoAdminMixerService } from './boxalino-admin-mixer.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  WidgetUseCase,
  WidgetUseCaseSchema,
} from './entities/widget-use-case.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WidgetUseCase.name, schema: WidgetUseCaseSchema },
    ]),
  ],
  controllers: [BoxalinoAdminMixerController],
  providers: [BoxalinoAdminMixerService],
})
export class BoxalinoAdminMixerModule {}
