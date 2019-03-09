import Vue from 'vue'
import axios, {AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse} from "axios"

class Api {
  private readonly instance: AxiosInstance;

  constructor(server: string) {
    this.instance = axios.create({
      baseURL: server,
      timeout: 1000,
    });
    this.instance.interceptors.request.use(function (config: AxiosRequestConfig) {
      const token = window.localStorage.getItem("token");
      if (token) {
        config.headers.common['Authorization'] = `Bearer ${token}`;
      }
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
  }

  createCommand(name: string): Promise<any> {
    return this.instance({
      method: "POST",
      url: "/teams",
      data: {
        name: name,
      },
    });
  }

  tournaments(): AxiosPromise {
    return this.instance({
      method: "GET",
      url: "/tournaments",
    });
  }

  bots(): AxiosPromise {
    return this.instance({
      method: "GET",
      url: "/bots",
    });
  }
}

const ApiPlugin = {
  install(Vue: Vue, options: any) {
    Vue.prototype.$api = new Api(options.server);
  }
};

Vue.use(ApiPlugin, {
  server: "http://localhost:1323/api",
});
