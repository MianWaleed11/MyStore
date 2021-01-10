import { HttpService } from "./base.service";
class ProductService extends HttpService {
  private readonly prefix: string = "products";

  getProducts = (): Promise<any> => this.get(`${this.prefix}`);
}
export const productService = new ProductService();
