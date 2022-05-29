import { createStore } from 'vuex'
import autenticacaoModule from './modules/autenticacaoModule'
import pesquisaColabModule from './modules/pesquisaColabModule'
import pesquisaItemModule from './modules/pesquisaItemModule'



export default createStore({
  modules: {
    autenticacaoModule,
    pesquisaColabModule,
    pesquisaItemModule,

  }
})
