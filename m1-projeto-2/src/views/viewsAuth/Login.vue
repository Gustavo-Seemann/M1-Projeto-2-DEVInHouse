<template>
    <div class="container" id="containerLogin">
        <div class="row vh-100 vw-100">
            <div class="col-sm-5 d-flex justify-content-center align-items-center" id="col-sm-5-login">
                <div class="col-8">
                    <img src="../../assets/Images/viewsAuthImagens/devinhouse-logo.png" class="img-login-form" />
                    <h2 class="text-center m-5 tittle-login">Faça o login</h2>
                    <Form
                        @submit="Login"
                        :validation-schema="schema"
                        @invalid-submit="onInvalidSubmit"
                    >
                        <TextInput
                            name="email"
                            type="email"
                            label="E-mail"
                            placeholder="Seu email"
                            success-message="Não se preocupe não iremos lhe incomodar!"
                        />
                        <TextInput
                            name="password"
                            type="password"
                            label="Senha"
                            placeholder="Sua senha"
                            success-message="Boa e segura!"
                        />
                        <div class="mb-3 d-flex justify-content-center">
                            <small><a href="" @click="emConstrucao">Esqueceu sua Senha?</a></small>
                        </div>
                        <button class="submit-btn" type="submit">Entrar</button>
                        <div class="d-grid gap-2 d-flex justify-content-center">
                            <Spinner :start="this.spin"/>
                        </div>
                        <div class="d-grid gap-2 d-flex justify-content-center">
                            <button class="btn btn btn-secondary m-1 px-5" @click="emConstrucao" type="button">Google</button>
                        </div>
                        <hr>
                        <div class="d-grid gap-2 d-flex justify-content-center">
                            <button class="btn btn-outline-dark mb-5" type="button" @click="irRegistro">Registrar-se!</button>
                        </div>
                        
                    </Form>
                </div>
            </div>
            <div class="col-sm-7 d-flex justify-content-center align-items-center" id="col-sm-7-login">
                <img src="../../assets/Images/viewsAuthImagens/loginImagem.svg" class="img-login" />
            </div>
        </div>
    </div>
</template>

<script>
import { Form } from "vee-validate";
import * as Yup from "yup";
import TextInput from "../../components/TextInput.vue";
import Spinner from "../../components/Spinner.vue"

export default {
    name: "Login",
    components: {
        TextInput,
        Form,
        Spinner
    },

    data() {
        return {
            spin: false
        }
    },

    methods: {

        Login(values) {
            this.spin = !this.spin;
            setTimeout(() => { this.$store.dispatch('autenticacaoModule/Login', values)
            .then(() => {
                this.$router.push('/');
            })}, 3000)
        },

        emConstrucao() {
            alert("Função em construção!")
        },
        irRegistro() {
            this.$router.push({ name:"register" });
        }
    },

    setup() {
        function onSubmit(values) {
        }

        function onInvalidSubmit() {
            const submitBtn = document.querySelector(".submit-btn");
            submitBtn.classList.add("invalid");
            setTimeout(() => { submitBtn.classList.remove("invalid"); }, 1000);
        }

        const schema = Yup.object().shape({
            email: Yup.string().email('Por favor insira um email valido!').required('Email é um campo obrigatorio.'),
            password: Yup.string().min(8, 'A senha deve ter 8 caracteres no minimo.').required('Você precisa inserir uma senha!'),
            });

        return {
            onSubmit,
            schema,
            onInvalidSubmit,
        };
    },
}
</script>

<style>

.img-login-form {
    max-width: 433px;
    max-height: 104px;
    margin: 5px;
}

#containerLogin{
    margin-right: 0;
    margin-left: 0px;
    margin: 0px;
}

#col-sm-5-login {
    background-color: white;
}

#col-sm-7-login {
    background: rgba(0, 0, 0, 0.63) url('../../assets/Images/viewsAuthImagens/BackgroundLogin.jpg');
    background-size: cover;
    background-blend-mode: darken;
}

.tittle-login {
    font-weight: bold;
}

.img-login {
    width: 600px;
    height: 600px;
    margin: 10px;
}

* {
    box-sizing: border-box;
    margin: 0;
}

:root {
    --primary-color: #0071fe;
    --error-color: #f23648;
    --error-bg-color: #fddfe2;
    --success-color: #21a67a;
    --success-bg-color: #e0eee4;
}

html,
body {
    width: 100%;
    height: 100%;
}

form {
    width: 300px;
    margin: 0px auto;
    padding-bottom: 60px;
}

.submit-btn {
    background: var(--primary-color);
    outline: none;
    border: none;
    color: #fff;
    font-size: 18px;
    padding: 10px 15px;
    display: block;
    width: 100%;
    border-radius: 7px;
    margin-top: 40px;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
}

.submit-btn.invalid {
    animation: shake 0.5s;
    animation-iteration-count: infinite;
}

@keyframes shake {
    0% {
        transform: translate(1px, 1px);
    }
    10% {
        transform: translate(-1px, -2px);
    }
    20% {
        transform: translate(-3px, 0px);
    }
    30% {
        transform: translate(3px, 2px);
    }
    40% {
        transform: translate(1px, -1px);
    }
    50% {
        transform: translate(-1px, 2px);
    }
    60% {
        transform: translate(-3px, 1px);
    }
    70% {
        transform: translate(3px, 1px);
    }
    80% {
        transform: translate(-1px, -1px);
    }
    90% {
        transform: translate(1px, 2px);
    }
    100% {
        transform: translate(1px, -2px);
    }
}

.submit-btn:hover {
    transform: scale(1.1);
}

@media only screen and (max-width: 480px) {
    .img-login, .img-login-form{
        width: 100%;
    }
}
</style>