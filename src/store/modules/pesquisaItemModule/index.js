import { atualizaDadosItens, itensFiltered } from "./mutations"

export default {
    namespaced: true,
    state: {
        itens: [],
        valorProcura: "",
        valores: [],
    },
    mutations: { 
        atualizaDadosItens,
        itensFiltered
    },
    actions: {
        atualizaDadosItens({commit}) {
            commit('atualizaDadosItens');
        },
        itensFiltered({commit}, NewValue) {
            commit('itensFiltered', NewValue);
        }
    },
}