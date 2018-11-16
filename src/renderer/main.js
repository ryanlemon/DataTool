import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
<<<<<<< HEAD
import 'element-ui/lib/theme-chalk/index.css'

=======
>>>>>>> 20e5d6daa6fc198d54d42a02a67cfdd159965f69
import App from './App'
import router from './router'
import store from './store'
import db from './datastore'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.prototype.$db = db
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
