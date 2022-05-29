function atualizaDadosItens(state) {
    state.valores = (localStorage.getItem("itens")) ? JSON.parse(localStorage.getItem("itens")) : [];
    state.itens = (localStorage.getItem("itens")) ? JSON.parse(localStorage.getItem("itens")) : [];
}

function itensFiltered(state, NewValue) {
    state.valorProcura = NewValue
    state.valores = [];
    state.valores = state.itens.filter((item) => {
        return (item.marca.toLowerCase().indexOf(state.valorProcura.toLowerCase()) > -1 ||
        item.descricao.toLowerCase().indexOf(state.valorProcura.toLowerCase()) > -1 ||
        item.titulo.toLowerCase().indexOf(state.valorProcura.toLowerCase()) > -1 ||
        item.modelo.toLowerCase().indexOf(state.valorProcura.toLowerCase()) > -1)
    });
    return state.valores;
}



export {atualizaDadosItens, itensFiltered};