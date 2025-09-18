import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export class Tooltip {
  @Prop({ required: true })
  language: string;

  @Prop({ required: true })
  value: string;
}

export class WidgetPropertyValue {
  @Prop({ required: true })
  widget_id: string;

  @Prop({ type: [String], default: [] })
  property_values: string[];
}

export class PropertyValue {
  @Prop({ required: true })
  property_name: string;

  @Prop({ type: [String], default: [] })
  property_values: string[];

  @Prop({ type: [String], default: [] })
  default_values: string[];

  @Prop({ type: [WidgetPropertyValue], default: [] })
  widget_property_values: WidgetPropertyValue[];

  @Prop({ type: [Tooltip], default: [] })
  tooltip: Tooltip[];

  @Prop({ type: [String], default: [] })
  string_attributes: string[];

  @Prop({ type: [String], default: [] })
  localized_string_attributes: string[];

  @Prop({ type: [String], default: [] })
  numeric_attributes: string[];

  @Prop({ type: [String], default: [] })
  localized_numeric_attributes: string[];

  @Prop({ type: [String], default: [] })
  datetime_attributes: string[];

  @Prop({ type: [String], default: [] })
  localized_datetime_attributes: string[];
}

export class ABTest {
  @Prop({ required: true })
  name: string;

  @Prop({ type: String, required: true })
  target_id: string;
}

export class Position {
  @Prop({ type: String, default: null })
  from_pos: string | null;

  @Prop({ type: String, default: null })
  to_pos: string | null;
}

export class LocalizedValue {
  @Prop({ type: String, default: '' })
  lang: string;

  @Prop({ type: String, default: '' })
  value: string;
}

export class AdvancedOptions {
  @Prop({ type: String, default: null })
  or_group: string | null;

  @Prop({ type: [LocalizedValue], default: null })
  overwrite_label: LocalizedValue[] | null;

  @Prop({ type: Position })
  position: Position;
}

@Schema()
export class WidgetUseCase {
  widget_use_case: string | null;

  @Prop({ required: true })
  use_case_id: string;

  @Prop({ type: [String], default: [] })
  widget_ids: string[];

  @Prop({ default: '' })
  name: string;

  @Prop({ type: [Tooltip], default: [] })
  tooltip: Tooltip[];

  @Prop({ type: Number, default: null })
  order: number | null;

  @Prop({ type: [PropertyValue], default: [] })
  property_values: PropertyValue[];

  @Prop({ type: [String], default: [] })
  string_attributes: string[];

  @Prop({ type: [String], default: [] })
  localized_string_attributes: string[];

  @Prop({ type: [String], default: [] })
  numeric_attributes: string[];

  @Prop({ type: [String], default: [] })
  localized_numeric_attributes: string[];

  @Prop({ type: [String], default: [] })
  datetime_attributes: string[];

  @Prop({ type: [String], default: [] })
  localized_datetime_attributes: string[];

  @Prop({ type: String, default: null })
  creation_tm: string | null;

  @Prop({ type: String, default: null })
  last_update_tm: string | null;

  @Prop({ type: String, default: null })
  last_update_user: string | null;

  @Prop({ type: String, default: null })
  category: string | null;

  @Prop({ type: Boolean, default: null })
  active: boolean | null;

  @Prop({ type: Array<String>, default: [] as string[] })
  segments: string[] | null;

  @Prop({ type: AdvancedOptions, default: null })
  advanced_options: AdvancedOptions | null;

  @Prop({ type: ABTest, default: null })
  ab_test: ABTest | null;
}

export const WidgetUseCaseSchema = SchemaFactory.createForClass(WidgetUseCase);
