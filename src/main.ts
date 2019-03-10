import Vue from 'vue'
import '@/plugins/vuetify'
import '@/plugins/api'
import '@/plugins/event-bus'
import '@/plugins/error-handler'
import '@/registerServiceWorker'
import router from '@/router'
import store from '@/store'
import App from '@/App.vue'

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
