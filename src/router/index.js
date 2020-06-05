import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/lartemporario',
      name: 'lartemporario',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/LarTemporario.vue')
    },
    {
      path: '/sejaumparceiro',
      name: 'sejaumparceiro',
      component: () => import('../views/SejaUmParceiro.vue')
    },
    {
      path: '/sejaumvoluntario',
      name: 'sejaumvoluntario',
      component: () => import('../views/SejaUmVoluntario.vue')
    },
    {
      path:'/facaumadoacao',
      name: 'facaumadoacao',
      component: () => import('../views/FacaUmaDoacao.vue')
    }
  ]
})