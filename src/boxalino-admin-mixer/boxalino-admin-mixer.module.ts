import { Module } from '@nestjs/common';
import { BoxalinoAdminMixerController } from './boxalino-admin-mixer.controller';
import { BoxalinoAdminMixerService } from './boxalino-admin-mixer.service';

@Module({
  controllers: [BoxalinoAdminMixerController],
  providers: [BoxalinoAdminMixerService]
})
export class BoxalinoAdminMixerModule {}
