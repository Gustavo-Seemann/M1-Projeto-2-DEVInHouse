import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/viewsAuth/Login.vue'
import Register from '../views/viewsAuth/Register.vue'
import Cadastroitems from '../views/dashboard/Cadastroitems.vue'


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
  {
    path: '/cadastroitem',
    name: 'CADASTRO DE ITENS',
    component: Cadastroitems
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
