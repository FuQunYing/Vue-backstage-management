import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import '../fake/fake.js'
import Vuex from 'vuex'
import Antd from 'ant-design-vue'
import ViserVue from 'viser-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Vuex);
Vue.use(Antd);
Vue.use(ViserVue);
//Vue.config直接在此使用？
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
