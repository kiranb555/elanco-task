export default interface IndividualResources {
  ConsumedQuantity: string;
  Cost: string;
  Date: string;
  InstanceId: string;
  MeterCategory: string;
  ResourceGroup: string;
  ResourceLocation: string;
  Tags: Tags;
  UnitOfMeasure: string;
  Location: string;
  ServiceName: string;
}
export interface Tags {
  'app-name': string;
  environment: string;
  'business-unit': string;
}
