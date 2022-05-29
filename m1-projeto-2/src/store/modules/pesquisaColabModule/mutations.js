
function atualizaDadosColab(state) {
    state.valores = (localStorage.getItem("colaboradores")) ? JSON.parse(localStorage.getItem("colaboradores")) : [];
    state.colaboradores = (localStorage.getItem("colaboradores")) ? JSON.parse(localStorage.getItem("colaboradores")) : [];
}

function ColabFiltered(state, NewValue) {
    state.valorProcura = NewValue
    state.valores = [];
    state.valores = state.colaboradores.filter((item) => {
        return (item.nome.toLowerCase().indexOf(state.valorProcura.toLowerCase()) > -1)});
    return state.valores;
}



export {atualizaDadosColab, ColabFiltered};