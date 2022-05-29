<template>
<div class="container">
        <div class="row vh-80 vw-80">
            <form class=" needs-validation" novalidate>
                <div class="titulo form-row d-flex justify-content-between">
                <h3>ITEM</h3>
                <div v-if="itemExistente">
                    <button class="btn btn-outline-danger btn-sm" @click="excluirItem">EXCLUIR</button>
                <button class="btn btn-outline-danger btn-sm btn-limpa" @click="limparForm">LIMPAR</button>
                </div>
                <div v-else>
                    <button class="btn btn-outline-danger btn-sm btn-limpa" @click="limparForm">LIMPAR</button>
                </div>
                </div>
                <hr>
                <div class="form-row d-flex justify-content-between">
                    <div class="form-group col-md-6">
                        <label for="inputNomeCad">Código de Patrimônio</label>
                        <input type="text" class="form-control" name="CodeItemCad" id="CodeItemCad" placeholder="Insira o código aqui" autocomplete="off" required v-model="item.codigo">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="CategoriaItemCad">Categoria do Item</label>
                        <select id="CategoriaItemCad" name="CategoriaItemCad" class="form-select" v-model="item.categoria" required>
                            <option selected>Selecione a categoria</option>
                            <option value="Eletronicos">Eletrônicos</option>
                            <option value="Perifericos">Periféricos</option>
                            <option value="Assessorios">Assessórios</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="TituloItemCad">Título do Item</label>
                        <input type="text" class="form-control" name="TituloItemCad" id="TituloItemCad" autocomplete="off" v-model="item.titulo" required>
                    </div>
                </div>
                <div class="form-row d-flex justify-content-between">
                    <div class="form-group col-md-6">
                        <label for="ValorItemCad">Valor do Item</label>
                        <input type="number" class="form-control" id="ValorItemCad" placeholder="0.00" name="ValorItemCad" autocomplete="off" v-model="item.valor" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="FotoItemCad">URL da Foto</label>
                        <input type="text" class="form-control" id="FotoItemCad" placeholder="https://exemplo.com.br" autocomplete="off" name="FotoItemCad" v-model="item.foto" required>
                    </div>
                </div>
                <div class="form-row d-flex justify-content-between">
                    <div class="form-group col-md-6">
                        <label for="MarcaItemCad">Marca</label>
                        <input type="text" class="form-control" autocomplete="off" placeholder="Ex: Logitech" id="MarcaItemCad" name="MarcaItemCad" v-model="item.marca" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="ModeloItemCad">Modelo</label>
                        <input type="text" class="form-control" id="ModeloItemCad" autocomplete="off" name="iModeloItemCad" placeholder="Ex: S20, ACER 320, etc." v-model="item.modelo" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="DescItemCad">Descrição</label>
                    <input type="text" class="form-control" id="DescItemCad" autocomplete="off" name="DescItemCad" v-model="item.descricao" required>
                </div>
                <button class="submit-btn" type="submit" @click="saveTask">Salvar</button>
            </form>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'

export default {
name: "CadastroItems",

data() {
    return {
        v$: useVuelidate(),
        item: {
            codigo: "",
            titulo: "",
            categoria: "",
            valor: "",
            foto: "",
            marca: "",
            modelo: "",
            descricao: "",
            emprestado: "",
            emprestadoSN: 0
        },
        methodSave: "new",
        itemExistente: null,
    }
	},

    validations() {
        return {
            item: {
                codigo: {
                    required
                },
                titulo: {
                    required
                },
                categoria: {
                    required
                },
                valor: {
                    required
                },
                foto: {
                    required
                },
                marca: {
                    required
                },
                modelo: {
                    required
                },
                descricao: {
                    required
                },
            },
        }
    },

    created() {
        if(this.$route.params.index === 0 || this.$route.params.index !== undefined) {
            this.methodSave = "update";
            let itens = JSON.parse(localStorage.getItem("itens"));
            this.item = itens[this.$route.params.index];
            this.itemExistente = "sim";
        }
    },


    methods: {
        saveTask() {
            this.v$.$validate()
            if (!this.v$.$error) {
                if(this.methodSave === "update"){
                    let itens = JSON.parse(localStorage.getItem("itens"));
                    Object.assign(itens[this.$route.params.index], this.item)
                    localStorage.setItem("itens", JSON.stringify(itens));
                    alert("Item editado com sucesso!")
                    this.$router.push( { name: "INVENTARIO" });
                    return;
                }
                let itens = (localStorage.getItem("itens")) ? JSON.parse(localStorage.getItem("itens")) : [];
                this.item["emprestado"] = "Na empresa"
                itens.push(this.item);
                localStorage.setItem("itens", JSON.stringify(itens));
                    alert("Item criado com sucesso!")
                this.$router.push( { name: "INVENTARIO" });
            }
            else {
                (() => {
                    'use strict'
                    const forms = document.querySelectorAll('.needs-validation')
                    Array.from(forms).forEach(form => {
                        form.addEventListener('submit', event => {
                            event.preventDefault()
                            event.stopPropagation()
                            form.classList.add('was-validated')
                        }, false)
                    })
                })()
                alert("Verifique seu formulário.")
            }
        },
        limparForm() {
            location.reload()
        },
        excluirItem() {
            let itens = JSON.parse(localStorage.getItem("itens"));
            itens.splice(this.$route.params.index, 1);
            localStorage.setItem("itens", JSON.stringify(itens));
            alert("Item excluído.");
            this.$router.push("/");
        }
    },
}
</script>

<style scoped>

form {
    background-color: white;
    padding: 50px;
}

.form-group {
    margin: 5px
}

.form-control, .form-select {
    border-radius: 5px;
    border: 2px solid transparent;
    padding: 15px 10px;
    outline: none;
    background-color: #f2f5f7;
    width: 100%;
    transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}

.form-control:focus, .form-select:focus {
    border-color: var(--primary-color);
}

.btn-limpa {
    margin-left: 5px;
}
</style>