import { HttpService } from "./base.service";
class ProductService extends HttpService {
  private readonly prefix: string = "products";

  getProduct = (): Promise<any> => {
    console.log(`${process.env.REACT_APP_BASE_URL}/${this.prefix}`);
    return this.get(`${this.prefix}`);
  };
}
export const productService = new ProductService();
