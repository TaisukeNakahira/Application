export type LocationType = {
  id: string;
  title: string;
  details: LocationDetailType[];
};

export type LocationDetailType = {
  id: number;
  title: string;
  description: string;
  imagePath: string;
};