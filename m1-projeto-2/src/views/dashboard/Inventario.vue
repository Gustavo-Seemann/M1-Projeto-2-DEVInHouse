<template>
<div class="app">
    <div class="row todosCards d-flex justify-content-center">
        <div class="row card" style="width: 18rem;">
            <div class="icone d-flex justify-content-center">
            <img src="../../assets/Images/InventarioImagens/InventarioColab.svg" class="card-img-top">
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-center">
                    <h1>{{$store.state.inventarioModule.colaboradores.length}}</h1>
                </div>
                <div class="d-flex justify-content-center">
                    <p class="card-text">COLABORADORES</p>
                </div>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <div class="icone d-flex justify-content-center">
            <img src="../../assets/Images/InventarioImagens/InventarioItens.svg" class="card-img-top">
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-center">
                    <h1>{{$store.state.inventarioModule.items.length}}</h1>
                </div>
                <div class="d-flex justify-content-center">
                    <p class="card-text">ITENS</p>
                </div>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <div class="icone d-flex justify-content-center">
            <img src="../../assets/Images/InventarioImagens/InventarioValor.svg" class="card-img-top">
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-center">
                    <h1>R${{$store.state.inventarioModule.ValorSomado}} </h1>
                </div>
                <div class="d-flex justify-content-center">
                    <p class="card-text">EM PRODUTOS</p>
                </div>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <div class="icone d-flex justify-content-center">
            <img src="../../assets/Images/InventarioImagens/InventarioEmprestimos.svg" class="card-img-top">
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-center">
                    <h1>{{$store.state.inventarioModule.ValorEmprestado}}</h1>
                </div>
                <div class="d-flex justify-content-center">
                    <p class="card-text">EMPRESTIMOS</p>
                </div>
            </div>
        </div>
    </div>
<CardItems/>
</div>
</template>

<script>
import CardItems from '../../components/CardItems.vue'

export default {
    components: {
        CardItems
    },
    
    created() {
        this.$store.dispatch('inventarioModule/atualizaDados')
    },
}
</script>

<style scoped>

.card{
    background-color: white;
    margin: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.315);
}

.searchContainer{
    margin-top: 50px;
}

.card-img-top {
    margin: 10px;
    padding: 20px;
    max-width: 246px;
    max-height: 168px;
}


@media only screen and (max-width: 480px) {
    .todosCards{
        width: 100%;
        display: flex;
        justify-content: center
    }
    .card {
        justify-content: center;
    }
}
</style>