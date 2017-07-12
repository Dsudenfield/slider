import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Slide from '@/components/Slide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/slide',
      name: 'slide',
      component: Slide
    }
  ]
})
