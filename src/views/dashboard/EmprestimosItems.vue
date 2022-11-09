<template>
<div>
    <div class="container justify-content-center searchContainer">
        <div class="row justify-content-center">
            <div class="col-md-9">
                <div class="input-group mb-3">
                    <input type="text" class="form-control input-text" placeholder="Digite o número de patrimõnio...." v-model="itensFiltered">
                    <div class="input-group-append">
                        <button class="btn btn-dark btn-lg" type="button"><i class="bi bi-search"></i></button>
                    </div>
                </div>
            </div>        
        </div>
    </div>


    <div class="container d-flex justify-content-center divTable">
        <table class="table table-hover">
            <thead class="table-dark">
                <tr>
                    <th scope="col">Patrimônio</th>
                    <th scope="col">Título</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Emprestado para</th>
                </tr>
            </thead>
            <tbody v-for="(item, index) in $store.state.pesquisaItemModule.valores" :key="index">
                <tr class="linhaTable" :id=item.codigo>
                    <th @click="edit(index)" scope="row">{{item.codigo}}</th>
                    <td @click="edit(index)">{{item.titulo}}</td>
                    <td @click="edit(index)">{{item.categoria}}</td>
                    <td><select class="status" name="status" @change="editaEmprestado($event, index)">
                        <option value="Na empresa">Na empresa</option>
                        <option v-for="(colaboradores, index) in colaboradores" :key="index" :value=colaboradores.nome :selected="item.emprestado == colaboradores.nome">{{ colaboradores.nome }}</option>
                    </select></td>
                </tr>
            </tbody>    
        </table>
    </div>

    <div v-if="isitensEmpty">
        <div class="sem-data justify-content-center">
            <h3> Nenhum item encontrado! </h3>
            <router-link class="btn btn-outline-danger btn-lg" to="cadastroitem">Cadastrar Item</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "EmprestimoItems",

    data() {
        return {
            itens: [],
            colaboradores: [],
        }
    },

    created() {
        this.itens = (localStorage.getItem("itens")) ? JSON.parse(localStorage.getItem("itens")) : [];
        this.colaboradores = (localStorage.getItem("colaboradores")) ? JSON.parse(localStorage.getItem("colaboradores")) : [];
        this.$store.dispatch('pesquisaItemModule/atualizaDadosItens');
    },

    methods: {
        edit(index) {
        this.$router.push({ name:"CADASTRO DE ITENS", params: { index } });
    },
        editaEmprestado(event, index) {
            const option = event.target.value;
            this.itens[index].emprestado = option
            if (this.itens[index].emprestado === "Na empresa") {
                this.itens[index].emprestadoSN = 0
            } else {
                this.itens[index].emprestadoSN = 1
            }
            let itens = this.itens
            localStorage.setItem("itens", JSON.stringify(itens));
        },
    },

    computed: {
        isitensEmpty() {
            const testeLength = (localStorage.getItem("itens")) ? JSON.parse(localStorage.getItem("itens")) : [];
        return testeLength.length === 0;
        },
        itensFiltered: {
            get() {
                return this.$store.state.pesquisaItemModule.valorProcura
            },

            set(NewValue) {
                this.$store.dispatch('pesquisaItemModule/itensFiltered', NewValue)
            }
        }
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

.btn-outline-primary {
    margin-top: 10px
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

@media only screen and (max-width: 480px) {
    .divTable {
        width: 100%;
        font-size: 14px;
    }
}

</style>