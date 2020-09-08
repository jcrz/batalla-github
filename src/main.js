import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';         // axios
import router from './router';

Vue.config.productionTip = false
Vue.prototype.$http = axios;      // axios

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
