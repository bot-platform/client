import Vue from 'vue';

export const EventBus = new Vue();

const EventBusPlugin = {
  install(Vue: Vue, options: any) {
    Vue.prototype.$eventBus = EventBus;
  }
};

Vue.use(EventBusPlugin, {});
