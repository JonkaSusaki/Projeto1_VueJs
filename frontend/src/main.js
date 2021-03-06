import Vue from 'vue'
import App from './App.vue'

import 'font-awesome/css/font-awesome.css'
import './config/bootstrap'
import './config/msgs'
/* import './config/axios' */

import store from './config/store.js'
import router from './config/router'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
