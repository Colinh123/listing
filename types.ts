export interface Product {
  id: string;
  designer: string;
  name: string;
  type: ProductType;
  price: number;
  size: string;
  condition: string;
  description: string;
  images: string[];
  listedDate: string;
}

export interface CartItem extends Product {
  userHeight: string;
  userWeight: string;
  userUnit: MeasurementUnit;
}

export enum ProductType {
  OUTERWEAR = 'Outerwear',
  TOPS = 'Tops',
  BOTTOMS = 'Bottoms',
  BAGS = 'Bags',
  SHOES = 'Shoes',
  ACCESSORIES = 'Accessories'
}

export enum MeasurementUnit {
  METRIC = 'Metric (cm/kg)',
  IMPERIAL = 'Imperial (ft/lbs)'
}

export interface FilterState {
  designer: string[];
  type: ProductType[];
}