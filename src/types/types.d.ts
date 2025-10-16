export type CategoryType = {
  slug: string;
  name: string;
  url: string;
};

export interface Product {
  readonly id: number;
  readonly title: string;
  readonly thumbnail: string;
  readonly description: string;
  readonly category?: string;
  readonly price: number;
  readonly discountPercentage?: number;
  readonly rating: number;
  readonly stock?: number;
  readonly tags?: string[];
  readonly brand?: string;
  readonly sku?: string;
  readonly weight?: number;
  readonly dimensions?: Dimensions;
  readonly warrantyInformation?: WarrantyInformation;
  readonly shippingInformation?: ShippingInformation;
  readonly availabilityStatus?: AvailabilityStatus;
  readonly reviews?: Review[];
  readonly returnPolicy?: ReturnPolicy;
  readonly minimumOrderQuantity?: number;
  readonly meta?: Meta;
  readonly images?: string[];
  readonly thumbnail: string;
}

export enum AvailabilityStatus {
  InStock = "In Stock",
  LowStock = "Low Stock",
  OutOfStock = "Out of Stock",
}

export interface Dimensions {
  readonly width?: number;
  readonly height?: number;
  readonly depth?: number;
}

export interface Meta {
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly barcode?: string;
  readonly qrCode?: string;
}

export enum ReturnPolicy {
  NoReturnPolicy = "No return policy",
  The30DaysReturnPolicy = "30 days return policy",
  The60DaysReturnPolicy = "60 days return policy",
  The7DaysReturnPolicy = "7 days return policy",
  The90DaysReturnPolicy = "90 days return policy",
}

export interface Review {
  readonly rating?: number;
  readonly comment?: Comment;
  readonly date?: Date;
  readonly reviewerName?: string;
  readonly reviewerEmail?: string;
}

export enum Comment {
  AwesomeProduct = "Awesome product!",
  DisappointingProduct = "Disappointing product!",
  ExcellentQuality = "Excellent quality!",
  FastShipping = "Fast shipping!",
  GreatProduct = "Great product!",
  GreatValueForMoney = "Great value for money!",
  HighlyImpressed = "Highly impressed!",
  HighlyRecommended = "Highly recommended!",
  NotAsDescribed = "Not as described!",
  NotWorthThePrice = "Not worth the price!",
  PoorQuality = "Poor quality!",
  VeryDisappointed = "Very disappointed!",
  VeryDissatisfied = "Very dissatisfied!",
  VeryHappyWithMyPurchase = "Very happy with my purchase!",
  VeryPleased = "Very pleased!",
  VerySatisfied = "Very satisfied!",
  VeryUnhappyWithMyPurchase = "Very unhappy with my purchase!",
  WasteOfMoney = "Waste of money!",
  WouldBuyAgain = "Would buy again!",
  WouldNotBuyAgain = "Would not buy again!",
  WouldNotRecommend = "Would not recommend!",
}

export enum ShippingInformation {
  ShipsIn12BusinessDays = "Ships in 1-2 business days",
  ShipsIn1Month = "Ships in 1 month",
  ShipsIn1Week = "Ships in 1 week",
  ShipsIn2Weeks = "Ships in 2 weeks",
  ShipsIn35BusinessDays = "Ships in 3-5 business days",
  ShipsOvernight = "Ships overnight",
}

export enum WarrantyInformation {
  LifetimeWarranty = "Lifetime warranty",
  NoWarranty = "No warranty",
  The1MonthWarranty = "1 month warranty",
  The1WeekWarranty = "1 week warranty",
  The1YearWarranty = "1 year warranty",
  The2YearWarranty = "2 year warranty",
  The3MonthsWarranty = "3 months warranty",
  The3YearWarranty = "3 year warranty",
  The5YearWarranty = "5 year warranty",
  The6MonthsWarranty = "6 months warranty",
}
