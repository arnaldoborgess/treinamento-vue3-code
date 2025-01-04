import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { defineAsyncComponent } from 'vue'

const Home = () => import('')
const Feedbacks = () => import('')
const Credencials = () => import('')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
component: Feedbacks,
meta: {
  hasAuth: true
}
  },
  {
    path: '/credencials',
    name: 'Credencias',
component: Credencials,
meta: {
  hasAuth: true
}
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
