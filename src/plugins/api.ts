import _Vue from 'vue'
import axios, {AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse} from "axios"
import {EventBus} from "@/plugins/event-bus"

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
    this.instance.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      if (parseInt(error.response.status) === 401) {
        EventBus.$emit("unauthorized");
      }
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

  addBot(name: string, address: string): AxiosPromise {
    return this.instance({
      method: "POST",
      url: "/bots",
      data: {
        name: name,
        address: address,
      },
    });
  }

  deleteBot(id: string): AxiosPromise {
    return this.instance({
      method: "DELETE",
      url: `/bots/${id}`,
    });
  }

  register(login: string): AxiosPromise {
    return this.instance({
      method: "POST",
      url: "/register",
      data: {
        login,
      },
    });
  }

  login(login: string, password: string): AxiosPromise {
    return this.instance({
      method: "POST",
      url: "/login",
      data: {
        login,
        password,
      },
    });
  }

  testBot(id: string): AxiosPromise {
    return this.instance({
      method: "POST",
      url: `/bots/${id}/test`,
      data: {},
    });
  }
}

export type PluginOptions = {
  server: string;
};

export default class ApiPlugin {
  static install(Vue: typeof _Vue, options: PluginOptions): void {
    Vue.prototype.$api = new Api(options.server);
  }
}
