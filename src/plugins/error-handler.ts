import _Vue from 'vue';

class ErrorHandler {
  constructor(private eventBus: any) {
  }

  public handle(err: any) {
    let text = "";
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      text = err.response.data.error || err.response.data.message;
    } else if (err.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(err.request);
      text = "client error"
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', err.message);
      text = "client error"
    }
    this.eventBus.$emit("error", text || "undefined error");
  }
}

export default class ErrorHandlerPlugin {
  static install(Vue: typeof _Vue, options?: any): void {
    Vue.prototype.$errorHandler = new ErrorHandler(Vue.prototype.$eventBus);
  }
}
