import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'

Vue.use(VueRouter)
Vue.use(vueResource)
Vue.use(VueLazyload)

Vue.http.options.headers = {'Content-Type': 'application/x-www-form-urlencoded'}

const Help = resolve => require(['./views/Help.vue'], resolve)

var router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: require('./views/Help.vue')
  }, {
      path: '/help',
      component: Help
    }, {
      path: '/type/chaozhi',
      component: require('./views/Chaozhi.vue')
    }, {
      path: '/type/top',
      component: require('./views/Top.vue')
    }, {
      path: '/type/huasuan',
      component: require('./views/Huasuan.vue')
    }, {
      path: '/detail/:id',
      component: require('./views/Detail.vue')
    }, {
      path: '/search',
      component: require('./views/Search.vue')
    }, {
      path: '/searchdetail',
      component: require('./views/Searchdetail.vue')
    }, {
      path: '/category',
      component: require('./views/Category.vue')
    }]
})

/* eslint-disable no-new */
new Vue({
  router, render: h => h(App)
}).$mount('#app')
