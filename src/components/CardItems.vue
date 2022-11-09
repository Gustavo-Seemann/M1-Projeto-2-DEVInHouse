<template>
<div>
    <div class="container justify-content-center searchContainer">
        <div class="row justify-content-center">
            <div class="col-md-9">
                <div class="input-group mb-3">
                    <input type="text" class="form-control input-text" placeholder="Procure um item..." v-model="itensFiltered">
                    <div class="input-group-append">
                        <button class="btn btn-dark btn-lg" type="button"><i class="bi bi-search"></i></button>
                    </div>
                </div>
            </div>        
        </div>
    </div>
<hr>
    <div v-if="isitensEmpty">
        <div class="sem-data justify-content-center">
            <h3> Nenhum item encontrado! </h3>
            <router-link class="btn btn-outline-danger btn-lg" to="cadastroitem">Cadastrar Item</router-link>
        </div>
    </div>

    <div class="row d-flex B">
        <div class="row d-flex A">
            <div class="card" @click="edit(index)" style="width: 18rem;" v-for="(itens, index) in $store.state.pesquisaItemModule.valores" :key="index">
                <img :src=itens.foto class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{itens.titulo}}</h5>
                    <p class="card-text cardDescricao">{{itens.descricao}}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{itens.codigo}}</li>
                    <li class="list-group-item">{{itens.marca}}</li>
                    <li class="list-group-item">R${{itens.valor}}</li>
                    <li class="list-group-item">Emprestado para</li>
                </ul>
                <div class="card-footer d-grid gap-2">
                    <button class="btn btn-dark">{{itens.emprestado}}</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "CardItems",

    created() {
        this.$store.dispatch('pesquisaItemModule/atualizaDadosItens');
    },

    methods: {
        edit(index) {
        this.$router.push({ name:"CADASTRO DE ITENS", params: { index } });
        },
    },

    computed: {
        itensFiltered: {
            get() {
                return this.$store.state.pesquisaItemModule.valorProcura
            },

            set(NewValue) {
                this.$store.dispatch('pesquisaItemModule/itensFiltered', NewValue)
            }
        },
        isitensEmpty() {
            const testeLength = (localStorage.getItem("itens")) ? JSON.parse(localStorage.getItem("itens")) : [];
        return testeLength.length === 0;
        },
    }
}
</script>

<style scoped>

.sem-data {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px;
    flex-direction: column;
}

.searchContainer{
    margin-top: 50px;
}

.card-img-top{
    margin-top: 10px;
}

.A, .B{
    width: 100%;
}

.A {
    margin: 10px
}

.card {
    margin: 40px;
    margin-bottom: 25px;
    box-shadow: 0 0 1em rgb(197, 197, 197);
}

.card:hover {
    color: rgb(218, 210, 188);
    box-shadow: 0 0 1em rgb(212, 72, 53)
}

@media only screen and (max-width: 480px) {
    .cardDescricao {
        max-width: 16ch;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .A {
        justify-content: center;
    }
}

</style>