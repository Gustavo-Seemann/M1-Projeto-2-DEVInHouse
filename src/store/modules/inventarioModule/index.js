import { atualizaDados } from "./mutations.js"

export default {
    namespaced: true,
    state: {
        items: [],
        colaboradores: [],
        ValorSomado: 0,
        ValorEmprestado: 0, 
    },
    mutations: { 
        atualizaDados
    },
    actions: {
        atualizaDados({commit}){
            commit('atualizaDados');
        }
    },
}