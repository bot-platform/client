import Vue from 'vue'
import '@/registerServiceWorker'
import '@/components/ui'
import router from '@/router'
import store from '@/store'
import WebSocketPlugin from "@/plugins/websocket";
import ErrorHandlerPlugin from "@/plugins/error-handler";
import EventBusPlugin from "@/plugins/event-bus";
import ApiPlugin from "@/plugins/api";
import Vuetify from "vuetify";
import App from '@/App.vue'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {iconfont: 'md'});
Vue.use(EventBusPlugin);
Vue.use(ErrorHandlerPlugin, {});
Vue.use(ApiPlugin, {server: "http://localhost:1323/api"});
Vue.use(WebSocketPlugin, {server: "ws://localhost:1323/io"});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
