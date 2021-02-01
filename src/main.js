import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import './../public/css/centralpec.css'
import './../public/js/centralpec.js'
import './../public/js/jdate.min.js'
import './../public/font/font.css'
import router from './router';
import VDistpicker from 'v-distpicker'
import axios from 'axios'

Vue.prototype.$axios = axios;

Vue.component('v-distpicker', VDistpicker)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
