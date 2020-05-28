import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lartemporario',
    name: 'LarTemporario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LarTemporario.vue')
  },
  {
    path: '/sejaumparceiro',
    name: 'SejaUmParceiro',
    component: () => import('../views/SejaUmParceiro.vue')
  },
  {
    path: '/sejaumvoluntario',
    name: 'SejaUmVoluntario',
    component: () => import('../views/SejaUmVoluntario.vue')
  },
  {
    path:'/facaumadoacao',
    name: 'FacaUmaDoacao',
    component: () => import('../views/FacaUmaDoacao.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
