export interface ICreateAds {
  url: string;
  description: string;
  basePrice: number;
  viewDuration: number;
  minRatingToViewAd: string;
  deviceToShowAd: string;
  geoTargeting: [string];
  rated: string;
}
