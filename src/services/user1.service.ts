import { ILoginData } from "../interfaces/register.interface";
import { Http1Service } from "./cart.service";
class User1Service extends Http1Service {
  private readonly prefix: string = "users";

  addToCard=()=>{
      this.get(`${this.prefix}/addToCart`)
  }

  
}
export const user1Service = new User1Service();
