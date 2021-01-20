import { ILoginData } from "../interfaces/register.interface";
import { HttpService } from "./base.service";
class UserService extends HttpService {
  private readonly prefix: string = "users";

  createUser = (data: ILoginData): Promise<any> =>
    this.post(`${this.prefix}`, data);

  
}
export const userService = new UserService();
