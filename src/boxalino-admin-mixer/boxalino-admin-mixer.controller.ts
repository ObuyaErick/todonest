import { Controller, Get } from '@nestjs/common';
import { BoxalinoAdminMixerService } from './boxalino-admin-mixer.service';

@Controller('boxalino-admin-mixer')
export class BoxalinoAdminMixerController {
  constructor(
    private readonly boxalinoAdminMixerService: BoxalinoAdminMixerService,
  ) {}

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
}
