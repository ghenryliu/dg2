import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import P01_carNoInput from '@/components/P01_carNoInput'
import P02_keyBoard from '@/components/P02_keyBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld

      name: 'HelloWorld',
      component: P01_carNoInput
    },

    { path: '/page2',
      // name: 'HelloWorld',
      // component: HelloWorld
      name: 'HelloWorld',
      component: P02_keyBoard},
  ]
})
