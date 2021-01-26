export interface IproductsCardsProps {
  category?: string;
  image: string;
  showMore?: () => void;
  price?: number;
  title?: string;
  showDetails?: () => void;
  showPrice?:boolean
}
