import { createStore } from 'vuex'
import autenticacaoModule from './modules/autenticacaoModule'



export default createStore({
  modules: {
    autenticacaoModule
  }
})
