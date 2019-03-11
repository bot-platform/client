import _Vue from 'vue';

export const EventBus = new _Vue();

export default class EventBusPlugin {
  static install(Vue: typeof _Vue, options?: any): void {
    Vue.prototype.$eventBus = EventBus;
  }
}
