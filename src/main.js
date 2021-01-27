// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Cookies from 'js-cookie'

// const savedToken = Cookies.get('accessToken')

// if(savedToken) {
//   store.dispatch('signinByToken', savedToken)
// }

function init () {
  const savedToken = Cookies.get('accessToken')

  if (savedToken) {
    return store.dispatch('signinByToken', savedToken)
  }else {
    return Promise.resolve()
  }
}

Vue.config.productionTip = false

init().then (res => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
})

