import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Login from '../views/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      hidden: true,
      redirect (to) {
        return 'login'
      }
    },
    {
      path: '/login',
      name: '登录',
      hidden: true,
      component: Login
    },
  ]
})
