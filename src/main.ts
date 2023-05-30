import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './config/router'
import store from './store/index'
import vuetify from './plugins/vuetify'
import DatetimePicker from 'vuetify-datetime-picker'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import i18n from './i18n';

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(DatetimePicker)

// Define o token de acesso na requisição
axios.interceptors.request.use(function(config) {

return config;
}, function(err) {
return Promise.reject(err);
});
Vue.prototype.$http = axios;

window.Vue = require('vue');

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
