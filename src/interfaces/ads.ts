export interface ICreateAds {
    url: string;
    description: string;
    basePrice: number | string;
    viewDuration: number | string;
    minRatingToViewAd: string;
    deviceToShowAd: string;
    geoTargeting: [string];
    rated: string;
  }
  