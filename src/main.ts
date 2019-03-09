import Vue from 'vue'
import './plugins/vuetify'
import './plugins/api'
import './plugins/event-bus'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
