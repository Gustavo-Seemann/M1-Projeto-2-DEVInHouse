
function atualizaDados(state) {
    state.items = (localStorage.getItem("itens")) ? JSON.parse(localStorage.getItem("itens")) : [];
    state.colaboradores = (localStorage.getItem("colaboradores")) ? JSON.parse(localStorage.getItem("colaboradores")) : [];
    state.ValorSomado = state.items.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
    state.ValorEmprestado = state.items.map(item => item.emprestadoSN).reduce((prev, curr) => prev + curr, 0); 
};

export { atualizaDados };