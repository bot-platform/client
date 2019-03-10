import Vue from 'vue'

class ErrorHandler {
  constructor(private eventBus: any) {
  }

  public handle(err) {
    console.debug(`handle error: ${err}`);
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

class ErrorHandlerPlugin {
  static install(vue: Vue, options: any) {
    vue.prototype.$errorHandler = new ErrorHandler(vue.prototype.$eventBus);
  }
}

Vue.use(ErrorHandlerPlugin);
