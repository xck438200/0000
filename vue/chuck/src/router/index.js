import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/Hi',
      component: Hi,
      children:[
        {path: '/',name: 'kk',component: Hi},
        {path: 'hi1',name: 'xck',component: Hi1},
        {path: 'hi2',name: 'chuck',component: Hi2}
      ]
    }
  ]
})
