<template>
    <div class="container" id="containerLogin">
        <div class="row vh-100 vw-100">
            <div class="col-sm-7 d-flex justify-content-center align-items-center">
                <img src="../../assets/Images/viewsAuthImagens/imagemRegister.svg" class="img-register" />
            </div>
            <div class="col-sm-5 d-flex justify-content-center align-items-center">
                <div class="col-8">
                    <img src="../../assets/Images/viewsAuthImagens/devinhouse-logo.png" class="img-register-form" />
                    <h2 class="text-center m-4 tittle-login">Criar Conta</h2>
                    <Form
                        @submit="salvarDados"
                        :validation-schema="schema"
                        @invalid-submit="onInvalidSubmit"
                    >
                        <TextInput
                            name="nameRegister"
                            type="text"
                            label="Nome"
                            placeholder="Seu nome"
                            success-message="Prazer em te conhecer!"
                        />
                        <TextInput
                            name="emailRegister"
                            type="email"
                            label="E-mail"
                            placeholder="Seu email"
                            success-message="Não se preocupe não iremos lhe incomodar!"
                        />
                        <TextInput
                            name="passwordRegister"
                            type="password"
                            label="Senha"
                            placeholder="Sua senha"
                            success-message="Boa e segura!"
                        />
                        <TextInput
                            name="confirm_passwordRegister"
                            type="password"
                            label="Confirme a senha"
                            placeholder="Confirme sua senha"
                            success-message="As senhas estão iguais!"
                        />
                        <button class="submit-btn" type="submit">Registrar</button>
                    </Form>
                    <div class="d-grid gap-2 d-flex justify-content-center">
                            <Spinner :start="this.spin"/>
                        </div>
                    <div class="d-flex justify-content-center align-items-center" id="divJaTemConta">
                        <button class="btn btn-outline-secondary btn-sm" @click="voltarLogin">Já possui uma conta? Entre aqui!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Form } from "vee-validate";
import * as Yup from "yup";
import TextInput from "../../components/TextInput.vue";
import Spinner from "../../components/Spinner.vue";

export default {
    name: "Register",
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
        salvarDados(values) {
            this.spin = !this.spin
            setTimeout(() => { this.spin = !this.spin}, 1900)
            setTimeout(() => {
            this.$store.dispatch('autenticacaoModule/salvarDados', values)
            .then(() => {
                this.$router.push('/login');
            })}, 2000);
        },

        voltarLogin() {
            this.$router.push('/login');
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
            nameRegister: Yup.string().required('Por favor insira seu nome.'),
            emailRegister: Yup.string().email('Por favor insira um email valido!').required('Email é um campo obrigatorio.'),
            passwordRegister: Yup.string().min(8, 'A senha deve ter 8 caracteres no minimo.').required('Você precisa inserir uma senha!'),
            confirm_passwordRegister: Yup.string()
            .required('Você precisa confirmar sua senha.')
            .oneOf([Yup.ref("passwordRegister")], 'As senhas não coincidem'),
            });

        return {
            onSubmit,
            schema,
            onInvalidSubmit,
        };
    },
}
</script>

<style scoped>

.col-sm-5 {
    background-color: white;
}
.col-sm-7 {
    background: rgba(0, 0, 0, 0.63) url('../../assets/Images/viewsAuthImagens/BackgroundRegister.jpg');
    background-size: cover;
    background-blend-mode: darken;
}

.img-register {
    max-width: 600px;
    max-height: 600px;
    padding: 40px;
}

.img-register-form {
    max-width: 433px;
    max-height: 104px;
    margin: 5px;
}

.submit-btn {
    background-color: rgb(0, 0, 0);
}

form {
    padding-bottom: 30px
}

@media only screen and (max-width: 480px) {
    .img-register, .img-register-form{
        width: 100%;
    }
}

</style>