import Vue from 'vue'
import ElementUI from 'element-ui'
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.config.productionTip = false

axios.defaults.baseURL="http://localhost:8181/api";

Vue.use(ElementUI);
Vue.use(VueAxios,axios);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
