import { HttpService } from "./base.service";
class ProductService extends HttpService {
  private readonly prefix: string = "products";

  getAllCategories = (): Promise<any> => this.get(`${this.prefix}/categories`);
  getProducts=(type:string):Promise<any>=>this.get(`${this.prefix}/category/${type}`);
  getAllProducts=():Promise<any>=>this.get(`${this.prefix}`);
  getProduct=(id:string):Promise<any>=>this.get(`${this.prefix}/${id}`);
  
}
export const productService = new ProductService();
