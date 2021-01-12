export interface IproductsCardsProps {
    category: string;
    image: string;
    showMore?: () => void;
    price?: string;
    title?: string;
    showDetails?:()=>void
  }