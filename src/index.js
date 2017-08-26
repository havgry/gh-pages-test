import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import VueAnalytics from 'vue-analytics'

import App from './components/App.vue'
import router from './router'
import store from './store'

Vue.use(VueRouter)

// eslint-disable-next-line
console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {
  Vue.use(VueAnalytics, {
    id: 'UA-27432261-5',
    router,
  })
}

sync(store, router)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})