import { LogInInterface } from "../interfaces";
import { ILoginData } from "../interfaces/register.interface";
import { HttpService } from "./base.service";
class UserService extends HttpService {
  private readonly prefix: string = "users";

  createUser = (data: ILoginData): Promise<any> =>
    this.post(`${this.prefix}`, data);

  loginUser = (data: LogInInterface): Promise<any> =>
    this.post(`${this.prefix}/login`, data);
  getUserCartInfo = (): Promise<any> => this.get(`${this.prefix}/userCartInfo`);
  addToCart = (id: string): Promise<any> =>
    this.get(`${this.prefix}/addToCart?productId=${id}&quantity=3`);

  removeFromCart = (id: string): Promise<any> =>
    this.get(`${this.prefix}/removeFromCart`, { _id: id });
}
export const userService = new UserService();
