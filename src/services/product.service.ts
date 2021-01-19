import { HttpService } from "./base.service";
class ProductService extends HttpService {
  private readonly prefix: string = "product";

  getAllCategories = (): Promise<any> => this.get(`${this.prefix}/categories`);
  //  getProducts=(type:string):Promise<any>=>this.get(`${this.prefix}/category/${type}`);
  getProducts = (): Promise<any> => this.post(`${this.prefix}/getProducts`,{});
  getProductById = (id:string): Promise<any> =>this.get(`${this.prefix}/products_by_id/${id}`);
  getAllProducts = (): Promise<any> => this.get(`${this.prefix}`);
  getProduct = (id: string): Promise<any> => this.get(`${this.prefix}/${id}`);
}
export const productService = new ProductService();
