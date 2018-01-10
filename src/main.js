// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false
fastclick.attach(document.body);
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload, {
  loading:require("common/img/green1.jpg")
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
