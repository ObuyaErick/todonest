import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BoxalinoAdminMixerService } from './boxalino-admin-mixer.service';
import { actionStack } from './payloads/history';

@Controller('boxalino-admin-mixer')
export class BoxalinoAdminMixerController {
  constructor(
    private readonly boxalinoAdminMixerService: BoxalinoAdminMixerService,
  ) {}

  @Get('seed')
  async seed() {
    return this.boxalinoAdminMixerService.seed();
  }

  @Get('pages')
  async pages() {
    return this.boxalinoAdminMixerService.pages();
  }

  @Get('narratives')
  async narratives() {
    return this.boxalinoAdminMixerService.narratives();
  }

  @Get('widgets')
  async widgets() {
    return this.boxalinoAdminMixerService.widgets();
  }

  @Get('use-cases')
  async useCases() {
    return this.boxalinoAdminMixerService.useCases();
  }

  @Get('widget-use-cases')
  async widgetUseCases() {
    return this.boxalinoAdminMixerService.widgetUseCases();
  }

  @Get('segments')
  async segments() {
    return this.boxalinoAdminMixerService.segments();
  }

  @Get('widget-use-cases/:id')
  async getWidgetUseCase(@Param('id') id: string) {
    return this.boxalinoAdminMixerService.getWidgetUseCase(id);
  }

  @Get('history')
  async getHistory() {
    return {
      success: true,
      status: 'SUCCESS',
      code: 200,
      payload: [actionStack],
      tm: '20250502155901',
      errors: [],
    };
  }

  @Post('widget-use-cases')
  @HttpCode(HttpStatus.OK)
  async createWidgetUseCase(@Body() payload: any[]) {
    return this.boxalinoAdminMixerService.createWidgetUseCase(payload);
  }

  @Put('widget-use-cases/:id')
  @HttpCode(HttpStatus.OK)
  async updateWidgetUseCase(@Param('id') id: string, @Body() payload: any) {
    return this.boxalinoAdminMixerService.updateWidgetUseCase(id, payload);
  }

  @Delete('widget-use-cases/:id')
  @HttpCode(HttpStatus.OK)
  async deleteWidgetUseCase(@Param('id') id: string) {
    return this.boxalinoAdminMixerService.deleteWidgetUseCase(id);
  }
}
