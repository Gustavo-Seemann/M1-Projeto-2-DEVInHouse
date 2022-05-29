import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/viewsAuth/Login.vue'
import Register from '../views/viewsAuth/Register.vue'
import Cadastroitems from '../views/dashboard/Cadastroitems.vue'
import CadastroColab from '../views/dashboard/CadastroColab.vue'
import Colaboradores from '../views/dashboard/Colaboradores.vue'
import Inventario from '../views/dashboard/Inventario.vue'
import EmprestimoItems from '../views/dashboard/EmprestimoItems.vue'


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
  {
    path: '/cadastrocolab',
    name: 'CADASTRO DE COLABORADORES',
    component: CadastroColab
  },
  {
    path: '/colaboradores-lista',
    name: 'COLABORADORES',
    component: Colaboradores
  },
  {
    path: '/',
    name: 'INVENTARIO',
    component: Inventario
  },
  {
    path: '/emprestimoitem',
    name: 'EMPRESTIMO DE ITENS',
    component: EmprestimoItems
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && to.name !== "register" && !localStorage.getItem('usuario')) {
    next({ name: 'login'});
  } else {
    next();
  }
});