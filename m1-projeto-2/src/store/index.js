import { createStore } from 'vuex'
import autenticacaoModule from './modules/autenticacaoModule'
import pesquisaColabModule from './modules/pesquisaColabModule'



export default createStore({
  modules: {
    autenticacaoModule,
    pesquisaColabModule,
  }
})
