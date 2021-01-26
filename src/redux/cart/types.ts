import { Iproduct } from "../../interfaces";


export interface Icart {
    id: string;
    quantity: number;
    date: number;
  }

export interface IcartState {
  cart: Icart[];
  data: Icart[];
  cartInfo: Iproduct[];
  isLoading: boolean;
}
