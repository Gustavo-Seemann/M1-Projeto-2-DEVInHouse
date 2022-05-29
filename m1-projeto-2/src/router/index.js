import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/viewsAuth/Login.vue'
import Register from '../views/viewsAuth/Register.vue'


const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
