import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        default:Hello,
        left:Hi1,
        right:Hi2,
      }
    },
    {
      path: '/kk',
      name: 'Hello',
      components: {
        default:Hello,
        left:Hi2,
        right:Hi1,
      }
    }
  ]
})
