import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import P01_carNoInput from '@/components/P01_carNoInput'
import P02_keyBoard from '@/components/P02_keyBoard'
import P03_feeBtn from '@/components/P03_feeBtn'
import P04_searchCarBtn from '@/components/P04_searchCarBtn'
import P05_order from '@/components/P05_order'
import P07_paySuccess from '@/components/P07_paySuccess'

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

    { path: '/page3',
      // name: 'HelloWorld',
      // component: HelloWorld
      name: 'HelloWorld',
      component: P03_feeBtn},


    { path: '/page4',
      // name: 'HelloWorld',
      // component: HelloWorld
      name: 'HelloWorld',
      component: P04_searchCarBtn},

    { path: '/page5',
      name: 'HelloWorld',
      component: P05_order},

    { path: '/page7',
      name: 'HelloWorld',
      component: P07_paySuccess},

  ]
})
