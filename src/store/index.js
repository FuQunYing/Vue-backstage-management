import Vue from 'vue'
import Vuex from 'vuex'
import chart from './modules/chart.js'


Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({

  modules: {
    chart
  },
  strict: debug,
})
