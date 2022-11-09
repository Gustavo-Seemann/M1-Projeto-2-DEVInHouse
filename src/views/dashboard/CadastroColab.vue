<template>
    <div class="container">
        <div class="row vh-80 vw-80">
            <form class=" needs-validation" novalidate>
                <div class="titulo form-row d-flex justify-content-between">
                <h3>FORMULÁRIO</h3>
                <div v-if="colabExistente">
                    <button class="btn btn-outline-danger btn-sm" @click="excluirColab">EXCLUIR</button>
                <button class="btn btn-outline-danger btn-sm btn-limpa" @click="limparForm">LIMPAR</button>
                </div>
                <div v-else>
                    <button class="btn btn-outline-danger btn-sm btn-limpa" @click="limparForm">LIMPAR</button>
                </div>
                </div>
                <hr>
                <div class="form-row d-flex justify-content-between">
                    <div class="form-group col-md-6">
                        <label for="inputNomeCad">Nome Completo</label>
                        <input type="text" class="form-control" name="inputNomeCad" id="inputNomeCad" required v-model="colaborador.nome">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputGenero">Gênero</label>
                        <select id="inputGenero" name="inputGenero" class="form-select" v-model="colaborador.genero" required>
                            <option selected>Selecione seu gênero</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>
                </div>
                <div class="form-row d-flex justify-content-between">
                    <div class="form-group col-md-6">
                        <label for="inputDataNasc">Data de Nascimento</label>
                        <input type="date" class="form-control" name="inputDataNasc" id="inputDataNasc" v-model="colaborador.dataNasc" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputCargo">Cargo</label>
                        <select id="inputCargo" class="form-select" name="inputCargo" v-model="colaborador.cargo" required>
                            <option selected>Selecione seu cargo</option>
                            <option value="Desenvolvedor">Desenvolvedor</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Estagiario">Estagiario</option>
                        </select>
                    </div>
                </div>
                <div class="form-row d-flex justify-content-between">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" name="inputEmail4" v-model="colaborador.email" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputTelefone">Telefone</label>
                        <input type="text" class="form-control" id="inputTelefone" autocomplete="off" name="inputTelefone" v-model="colaborador.telefone" required>
                    </div>
                </div>
                <div class="form-row d-flex justify-content-between">
                    <div class="form-group col-md-4">
                        <label for="inputCEP">CEP</label>
                        <input type="text" class="form-control" v-model="colaborador.cep" @keyup="searchCep" autocomplete="off" id="inputCEP" name="inputCEP" required>
                        <div id="validationFeedback" class="invalid-feedback">
                            Insira um CEP valido.
                        </div>
                        <div id="validationFeedback" class="valid-feedback">
                            Insira um CEP valido.
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputCity">Cidade</label>
                        <input type="text" class="form-control" id="inputCity" autocomplete="off" v-model="colaborador.localidade" name="inputCity" required>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputEstado">Estado</label>
                        <input type="text" id="inputEstado" class="form-control" v-model="colaborador.uf" name="inputEstado" required>
                    </div>
                </div>
                <div class="form-row d-flex justify-content-between">
                    <div class="form-group col-md-6">
                        <label for="inputAddress">Logradouro</label>
                        <input type="text" class="form-control" id="inputAddress" v-model="colaborador.logradouro" name="inputAddress" required>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputAddressNum">Número</label>
                        <input type="text" class="form-control" id="inputAddressNum" v-model="colaborador.endNum" required>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputAddressBairro">Bairro</label>
                        <input type="text" class="form-control" id="inputAddressBairro" v-model="colaborador.bairro" name="inputAddressBairro" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Complemento e informações</label>
                    <input type="text" class="form-control" id="inputAddress2" name="inputAddress2" v-model="colaborador.complemento" required>
                </div>
                <button class="submit-btn" type="submit" @click="saveTask">Salvar</button>
                <div class="d-grid gap-2 d-flex justify-content-center">
                    <Spinner :start="this.spin"/>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'
import axios from "axios";
import Spinner from "../../components/Spinner.vue"

export default {
name: "CadastroColab",

components: {
    Spinner
},

data() {
    return {
        spin: false,
        v$: useVuelidate(),
        cep: "",
        colaborador: {
            nome: "",
            dataNasc: "",
            email: "",
            telefone: "",
            endNum: "",
            complemento: "",
            genero: "",
            cargo: "",
            cep: "",
            bairro: "",
            logradouro: "",
            uf: "",
            localidade: "",
        },
        methodSave: "new",
        colabExistente: null,
    }
	},

    validations() {
        return {
            colaborador: {
                nome: {
                    required
                },
                dataNasc: {
                    required
                },
                email: {
                    email
                },
                telefone: {
                    required
                },
                endNum: {
                    required
                },
                complemento: {
                    required
                },
                genero: {
                    required
                },
                cargo: {
                    required
                },
                bairro: {
                    required
                },
                logradouro: {
                    required
                },
                uf: {
                    required
                },
                localidade: {
                    required
                },
                cep: {
                    minLength: minLength(8)
                },
            },
        }
    },

    created() {
        if(this.$route.params.index === 0 || this.$route.params.index !== undefined) {
            this.methodSave = "update";
            let colaboradores = JSON.parse(localStorage.getItem("colaboradores"));
            this.colaborador = colaboradores[this.$route.params.index];
            this.colabExistente = "sim"
        }
    },


    methods: {
        searchCep () {
			if(this.colaborador.cep.length == 8) {
                return axios.get(`https://viacep.com.br/ws/${ this.colaborador.cep }/json/`)
				.then( response => this.colaborador = Object.assign(this.colaborador, response.data) )
				.catch( error => console.log(error) )
			}
		},
        saveTask() {
            this.v$.$validate()
            if (!this.v$.$error) {
                if(this.methodSave === "update"){
                    let colaboradores = JSON.parse(localStorage.getItem("colaboradores"));
                    colaboradores[this.$route.params.index] = this.colaborador;
                    localStorage.setItem("colaboradores", JSON.stringify(colaboradores));
                    alert("Colaborador editado com sucesso!")
                    this.spin = !this.spin
                    setTimeout(() => { this.spin = !this.spin}, 1900)
                    setTimeout(() => {this.$router.push( { name: "COLABORADORES" })}, 2000);
                    return;
                }
                let colaboradores = (localStorage.getItem("colaboradores")) ? JSON.parse(localStorage.getItem("colaboradores")) : [];
                colaboradores.push(this.colaborador);
                localStorage.setItem("colaboradores", JSON.stringify(colaboradores));
                alert("Colaborador criado com sucesso!")
                this.spin = !this.spin
                setTimeout(() => { this.spin = !this.spin}, 1900)
                setTimeout(() => {this.$router.push( { name: "COLABORADORES" })}, 2000);
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
        excluirColab() {
            let colaboradores = JSON.parse(localStorage.getItem("colaboradores"));
            colaboradores.splice(this.$route.params.index, 1);
            localStorage.setItem("colaboradores", JSON.stringify(colaboradores));
            alert("Colaborador excluído.");
            this.$router.push({ name:"COLABORADORES"});
        }
    },
}
</script>

<style scoped>

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