export type IDestination = {
  id: string;
  name: string;
  description?: string;
  image?: string;
  hotels:{name:string;propertyCategory:number}[];
  avgPropertyCategory: number | null;
};
