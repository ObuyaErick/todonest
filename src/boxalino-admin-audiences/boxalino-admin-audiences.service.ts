import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import audienceFilterTypes from './audience_data/filter-types';
import audienceStats from './audience_data/stats';
import audienceAudiences from './audience_data/audiences';

@Injectable()
export class BoxalinoAdminAudiencesService {
  async stats() {
    return audienceStats;
  }
  async filterTypes() {
    return audienceFilterTypes;
  }
  async audiences() {
    return audienceAudiences;
  }
  async seed() {
    // await this.widgetUseCaseModel.deleteMany({});
    // await this.widgetUseCaseModel.insertMany(boxalino_widget_use_cases.payload);
    // return {
    //   message: '✅ WidgetUseCase data seeded',
    // };
    return { seed: 'seed' };
  }
  constructor() {} // private readonly widgetUseCaseModel: Model<WidgetUseCase>, // @InjectModel(WidgetUseCase.name)
}
