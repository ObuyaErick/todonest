import { Module } from '@nestjs/common';
import { BoxalinoAdminAudiencesService } from './boxalino-admin-audiences.service';
import { BoxalinoAdminAudiencesController } from './boxalino-admin-audiences.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      // { name: WidgetUseCase.name, schema: WidgetUseCaseSchema },
    ]),
  ],
  providers: [BoxalinoAdminAudiencesService],
  controllers: [BoxalinoAdminAudiencesController],
})
export class BoxalinoAdminAudiencesModule {}
