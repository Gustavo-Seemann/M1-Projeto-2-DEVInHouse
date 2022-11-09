<template>
<div>
    <div class="container justify-content-center searchContainer">
        <div class="row justify-content-center">
            <div class="col-md-9">
                <div class="input-group mb-3">
                    <input type="text" class="form-control input-text" placeholder="Digite o nome completo..." v-model="colabFiltered">
                    <div class="input-group-append">
                        <button class="btn btn-dark btn-lg" type="button"><i class="bi bi-search"></i></button>
                    </div>
                </div>
            </div>        
        </div>
    </div>


    <div class="row d-flex B">
        <div class="row d-flex A">
            <div class="card" style="width: 18rem;" v-for="(colaborador, index) in $store.state.pesquisaColabModule.valores" :key="index">
                <vue-gravatar :email="colaborador.email" :size="150" />
                <div class="card-body" @click="edit(index)">
                    <h5 class="card-title">{{colaborador.nome}}</h5>
                    <p class="card-text cardDescricao">{{colaborador.email}}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{colaborador.telefone}}</li>
                    <li class="list-group-item cargoA">{{colaborador.cargo}}</li>
                </ul>
                <div class="card-footer">
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    name: "EmprestimoItems",

    created() {
        this.$store.dispatch('pesquisaColabModule/atualizaDadosColab');
    },

    methods: {
        edit(index) {
        this.$router.push({ name:"CADASTRO DE COLABORADORES", params: { index } });
        },
    },

    computed: {
        iscolaboradoresEmpty() {
            const testeLength = (localStorage.getItem("colaboradores")) ? JSON.parse(localStorage.getItem("colaboradores")) : [];
        return testeLength.length === 0;
        },
        colabFiltered: {
            get() {
                return this.$store.state.pesquisaColabModule.valorProcura
            },

            set(NewValue) {
                this.$store.dispatch('pesquisaColabModule/ColabFiltered', NewValue)
            }
        }
    }


}
</script>

<style scoped>

.card:hover {
    color: rgb(218, 210, 188);
    box-shadow: 0 0 1em rgb(158, 78, 67)
}

.A, .B{
    width: 100%;
}
.A {
    margin: 10px;
}

.card {
    margin: 10px;
    margin-bottom: 25px;
    box-shadow: 0 0 1em rgb(197, 197, 197);
}

.searchContainer{
    margin-bottom: 50px;
}

.btn:hover{
    color:#fff;
}

.input-text:focus{

    box-shadow: 0px 0px 0px;
    border-color: black;
    outline: 0px;
}

.form-control {
    width: 100%;
    border: 1px solid black;
}

.cargoA{
    font-weight: bold;
    font-size: 22px;
}

@media only screen and (max-width: 480px) {
    .divTable {
        width: 100%;
        font-size: 14px;
    }
    .A {
        justify-content: center;
    }
}
</style>