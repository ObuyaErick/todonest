import { Controller, Get } from '@nestjs/common';
import { BoxalinoAdminAudiencesService } from './boxalino-admin-audiences.service';

@Controller('boxalino-admin-audiences')
export class BoxalinoAdminAudiencesController {
  constructor(
    private readonly boxalinoAdminAudiencesService: BoxalinoAdminAudiencesService,
  ) {}

  @Get('seed')
  async seed() {
    return this.boxalinoAdminAudiencesService.seed();
  }

  @Get('audiences')
  async pages() {
    return this.boxalinoAdminAudiencesService.audiences();
  }

  @Get('filter-types')
  async narratives() {
    return this.boxalinoAdminAudiencesService.filterTypes();
  }

  @Get('stats')
  async widgets() {
    return this.boxalinoAdminAudiencesService.stats();
  }

  //   @Get('use-cases')
  //   async useCases() {
  //     return this.boxalinoAdminAudiencesService.useCases();
  //   }

  //   @Get('widget-use-cases')
  //   async widgetUseCases() {
  //     return this.boxalinoAdminAudiencesService.widgetUseCases();
  //   }

  //   @Get('segments')
  //   async segments() {
  //     return this.boxalinoAdminAudiencesService.segments();
  //   }
}
