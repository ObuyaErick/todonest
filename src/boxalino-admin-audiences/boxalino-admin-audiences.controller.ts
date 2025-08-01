import { Controller, Get, Param } from '@nestjs/common';
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

  @Get('audiences/audiences')
  async audiences() {
    return this.boxalinoAdminAudiencesService.audiences();
  }

  @Get('audiences/audiences/:id')
  async getAudience(@Param('id') id: string) {
    return this.boxalinoAdminAudiencesService.findAudience(id);
  }

  @Get('audiences/stats')
  async getAudienceStats() {
    return this.boxalinoAdminAudiencesService.audienceStats();
  }

  @Get('audiences/temp-stats/:id')
  async getAudienceStatsById(@Param('id') id: string) {
    return this.boxalinoAdminAudiencesService.getAudienceStatsById(id);
  }

  @Get('collections/collections')
  async collections() {
    return this.boxalinoAdminAudiencesService.collections();
  }

  @Get('collections/collections/:id')
  async getCollection(@Param('id') id: string) {
    return this.boxalinoAdminAudiencesService.findCollection(id);
  }

  @Get('collections/temp-stats/:id')
  async getCollectionStatsById(@Param('id') id: string) {
    return this.boxalinoAdminAudiencesService.getCollectionStatsById(id);
  }

  @Get('audiences/filter-types')
  async audienceFilterTypes() {
    return this.boxalinoAdminAudiencesService.audienceFilterTypes();
  }

  @Get('collections/filter-types')
  async collectionFilterTypes() {
    return this.boxalinoAdminAudiencesService.collectionFilterTypes();
  }
}
