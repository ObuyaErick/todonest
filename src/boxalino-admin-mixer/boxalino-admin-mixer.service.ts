import { Injectable } from '@nestjs/common';
import boxalino_pages from './payloads/pages';
import boxalino_narratives from './payloads/narratives';
import boxalino_widgets from './payloads/widgets';
import boxalino_widget_use_cases from './payloads/widget_use_cases';
import boxalino_use_cases from './payloads/use_cases';

@Injectable()
export class BoxalinoAdminMixerService {
  async pages() {
    return boxalino_pages;
  }

  async narratives() {
    return boxalino_narratives;
  }
  async widgets() {
    return boxalino_widgets;
  }
  async useCases() {
    return boxalino_use_cases;
  }
  async widgetUseCases() {
    return boxalino_widget_use_cases;
  }
}
