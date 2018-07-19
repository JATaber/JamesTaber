// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAnalytics from 'vue-analytics'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue'
import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import Meta from 'vue-meta'

Vue.component('icon', Icon)

Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(Meta)

// const isProd = process.env.NODE_ENV === 'production'

Vue.use(VueAnalytics, {
  id: 'UA-122573106-1',
  router,
  autoTracking: {
    exception: true
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
