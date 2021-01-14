import { HttpService } from "./base.service";
class ProductService extends HttpService {
  private readonly prefix: string = "products";

  AllCategories = (): Promise<any> => this.get(`${this.prefix}/categories`);
  Products=(type:string):Promise<any>=>this.get(`${this.prefix}/category/${type}`)
  
}
export const productService = new ProductService();
