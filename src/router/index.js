import Vue from 'vue'
import VueRouter from 'vue-router'
import Transaction from '../views/Transaction.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/transaction', name: 'transaction', component: Transaction },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
