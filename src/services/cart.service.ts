import axios, { CancelTokenStatic, CancelTokenSource } from "axios";
const Config = process.env.REACT_APP_ADD_TO_CART_URL;

export class Http1Service {
  CancelToken: CancelTokenStatic;
  source: CancelTokenSource;

  constructor() {
    this.CancelToken = axios.CancelToken;
    this.source = this.CancelToken.source();
  }

  /**
   * Set Token On Header
   * @param token
   */
 static  setToken(token: string): void {
    axios.defaults.headers["Authorization"] = `${token}`;
    // axios.defaults.headers['Authorization']
    //     =`${token}`
  }

  /**
   * Fetch data from server
   * @param url Endpoint link
   * @return Promise
   */
  protected get = (url: string, params?: any): Promise<any> =>
    axios.get(`${Config}/${url}`, {
      params,
      cancelToken: this.source.token,
    });

  /**
   * Write data over server
   * @param url Endpoint link
   * @param body Data to send over server
   * @return Promise
   */
  protected post = (url: string, body: any, options = {}): Promise<any> =>
    axios.post(`${Config}/${url}`, body, {
      ...options,
      cancelToken: this.source.token,
    });

  /**
   * Delete Data From Server
   * @param url Endpoint link
   * @param params Embed as query params
   * @return Promise
   */
  protected delete = (url: string, params?: any, data?: any): Promise<any> =>
    axios.delete(`${Config}/${url}`, { params, data });

  /**
   * Update data on server
   * @param url Endpoint link
   * @param body Data to send over server
   * @param params Embed as query params
   * @return Promise
   */
  protected put = (url: string, body?: any, params?: any): Promise<any> =>
    axios.put(`${Config}/${url}`, body, {
      ...params,
      cancelToken: this.source.token,
    });

  private updateCancelToken() {
    this.source = this.CancelToken.source();
  }

  cancel = () => {
    this.source.cancel("Explicitly cancelled HTTP request");
    this.updateCancelToken();
  };
}
