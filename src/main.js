// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import $ from 'jquery'
import utils from './utils/index'

const Vue = require('vue')
Vue.config.productionTip = false
Vue.prototype.$utils = utils
new Vue({
  el: '#app',
  router,
  store,
  render() {
    return <App/>;
  },
  components: {App}
})
