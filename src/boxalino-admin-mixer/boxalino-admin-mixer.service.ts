import { Injectable } from '@nestjs/common';
import boxalino_pages from './payloads/pages';
import boxalino_narratives from './payloads/narratives';
import boxalino_widgets from './payloads/widgets';
import boxalino_use_cases from './payloads/use_cases';
import boxalino_widget_use_cases from './payloads/widget_use_cases';
import boxalino_segments from './payloads/segments';
import { Model } from 'mongoose';
import { WidgetUseCase } from './entities/widget-use-case.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BoxalinoAdminMixerService {
  constructor(
    @InjectModel(WidgetUseCase.name)
    private readonly widgetUseCaseModel: Model<WidgetUseCase>,
  ) {}

  async seed() {
    await this.widgetUseCaseModel.deleteMany({});
    await this.widgetUseCaseModel.insertMany(boxalino_widget_use_cases.payload);
    return {
      message: '✅ WidgetUseCase data seeded',
    };
  }

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
  async segments() {
    return boxalino_segments;
  }
  async widgetUseCases() {
    const records = await this.widgetUseCaseModel.find().exec();
    return {
      success: true,
      status: 'SUCCESS',
      code: 200,
      payload: records.map((doc) => {
        const { _id, __v, ...rest } = doc.toObject();
        return {
          ...rest,
          widget_use_case: _id,
        };
      }),
      tm: '20250502155901',
      errors: [],
    };
  }
  async deleteWidgetUseCase(id: string) {
    const deletedWidgetUseCase = await this.widgetUseCaseModel
      .findByIdAndDelete(id)
      .lean();

    if (!deletedWidgetUseCase) {
      return {
        success: false,
        status: 'NOT_FOUND',
        code: 404,
        payload: [],
        tm: '20250502155901',
        errors: [`WidgetUseCase with ID ${id} not found.`],
      };
    }

    return {
      success: true,
      status: 'SUCCESS',
      code: 200,
      payload: [deletedWidgetUseCase],
      tm: '20250502155901',
      errors: [],
    };
  }
  async updateWidgetUseCase(id: string, payload: any) {
    const updated = await this.widgetUseCaseModel
      .findByIdAndUpdate(id, payload[0], {
        new: true,
        runValidators: true,
      })
      .lean();

    if (!updated) {
      return {
        success: false,
        status: 'NOT_FOUND',
        code: 404,
        payload: [updated],
        tm: '20250502155901',
        errors: [`WidgetUseCase with ID ${id} not found.`],
      };
    }

    return {
      success: true,
      status: 'SUCCESS',
      code: 200,
      payload: [{ ...updated, widget_use_case: updated._id }],
      tm: '20250502155901',
      errors: [],
    };
  }
  async createWidgetUseCase(payload: any[]) {
    const newWidgetUseCase = new this.widgetUseCaseModel(payload[0]);

    const { __v, _id, ...rest } = (await newWidgetUseCase.save()).toObject();

    return {
      success: true,
      status: 'SUCCESS',
      code: 200,
      payload: [{ ...rest, widget_use_case: _id }],
      tm: '20250502155901',
      errors: [],
    };
  }
  async getWidgetUseCase(id: string) {
    const widgetUseCase = (
      await this.widgetUseCaseModel.findById(id).exec()
    )?.toObject();
    return {
      success: true,
      status: 'SUCCESS',
      code: 200,
      payload: [{ ...widgetUseCase, widget_use_case: widgetUseCase?._id }],
      tm: '20250502155901',
      errors: [],
    };
  }
}
