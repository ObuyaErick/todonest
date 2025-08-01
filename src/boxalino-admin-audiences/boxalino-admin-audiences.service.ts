import { Injectable } from '@nestjs/common';

import audienceFilterTypes from './audience_data/audience-filter-types';
import audienceStats from './audience_data/stats';
import audienceAudiences from './audience_data/audiences';
import collectionFilterTypes from './audience_data/collection-filter-types';
import audienceCollections from './audience_data/collections';
import collectionStats from './audience_data/collection-stats';

@Injectable()
export class BoxalinoAdminAudiencesService {
  constructor() {} // private readonly widgetUseCaseModel: Model<WidgetUseCase>, // @InjectModel(WidgetUseCase.name)

  async audienceFilterTypes() {
    return audienceFilterTypes;
  }
  async collectionFilterTypes() {
    return collectionFilterTypes;
  }
  async audiences() {
    return audienceAudiences;
  }

  async collections() {
    return audienceCollections;
  }
  async audienceStats() {
    return audienceStats;
  }
  async collectionStats() {
    return collectionStats;
  }

  async findAudience(id: string) {
    const { payload, ...props } = audienceAudiences;
    return {
      ...props,
      payload: payload.filter((aud) => aud.audience_id === id).slice(0, 1),
    };
  }

  getAudienceStatsById(id: string) {
    const { payload, ...props } = audienceStats;
    return {
      ...props,
      payload: payload.filter((aud) => aud.audience_id === id).slice(0, 1),
    };
  }

  async findCollection(id: string) {
    const { payload, ...props } = audienceCollections;
    return {
      ...props,
      payload: payload.filter((col) => col.collection_id === id).slice(0, 1),
    };
  }

  getCollectionStatsById(id: string) {
    const { payload, ...props } = collectionStats;
    return {
      ...props,
      payload: payload.filter((aud) => aud.collection_id === id).slice(0, 1),
    };
  }

  async seed() {
    // await this.widgetUseCaseModel.deleteMany({});
    // await this.widgetUseCaseModel.insertMany(boxalino_widget_use_cases.payload);
    // return {
    //   message: '✅ WidgetUseCase data seeded',
    // };
    return { seed: 'seed' };
  }
}
