import _Vue from 'vue';
import ReconnectingWebSocket, {Options} from "reconnecting-websocket";
import {CloseEvent, ErrorEvent, Event} from "reconnecting-websocket/events";

type Callback = (payload: any) => void

type Message = {
  event: string
  payload: any
};

class WebSocket {
  // @ts-ignore
  private connection: ReconnectingWebSocket;
  private options: Options = {
    debug: false,
    minReconnectionDelay: 0,
  };

  constructor(private readonly server: string) {

  }

  connect(): void {
    if (this.connection !== null) {
      this.connection = new ReconnectingWebSocket(this.server, [], this.options);
    }
  }

  disconnect(): void {
    this.connection.close();
  }

  emit(event: string, payload: any = null): void {
    this.connection.send(JSON.stringify({
      event: event,
      payload: payload,
    }));
  }

  on(eventName: string, callback: Callback): void {
    this.connection.addEventListener("message", (event: MessageEvent) => {
      const message = <Message>JSON.parse(event.data);
      if (eventName === message.event) {
        callback(message.payload)
      }
    });
  }

  opened(callback: (event: Event) => void): void {
    this.connection.addEventListener("open", callback);
  }

  closed(callback: (event: CloseEvent) => void): void {
    this.connection.addEventListener("close", callback);
  }

  errored(callback: (event: ErrorEvent) => void): void {
    this.connection.addEventListener("error", callback);
  }
}

export default class WebSocketPlugin {
  static install(Vue: typeof _Vue, options?: any): void {
    Vue.prototype.$ws = new WebSocket(options.server);
  }
}
