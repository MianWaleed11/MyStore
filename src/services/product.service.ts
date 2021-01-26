import { HttpService } from "./base.service";
class ProductService extends HttpService {
  private readonly prefix: string = "product";

  getProducts = (): Promise<any> => this.post(`${this.prefix}/getProducts`, {});
  getProductById = (id: string): Promise<any> =>
    this.get(`${this.prefix}/products_by_id`, { id: id });
}
export const productService = new ProductService();
