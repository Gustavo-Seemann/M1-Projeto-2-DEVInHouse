<template>
<div>
    <nav class="navbar navbar-dark bg-dark justify-content-between" v-if="notIsLoginPage">
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link active linknavUm" aria-current="page">{{this.$route.name}}</a>
            </li>
        </ul>
        <ul class="nav" id="navDireito">
            <li class="nav-item">
                <a class="nav-link userNameNav"> {{usuarioLogado.nameRegister}}</a>
            </li>
            <li class="nav-item">
                <vue-gravatar :email="usuarioLogado.emailRegister" :size="50" />
            </li>
        </ul>
    </nav>
    <div v-if="notIsLoginPage">
        <div class="offcanvas offcanvas-start w-25" tabindex="-1" id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
            <div class="offcanvas-header">
                <h6 class="offcanvas-title d-none d-sm-block" id="offcanvas">Menu</h6>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body px-0">
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
                    <li class="nav-item">
                        <a href="#" @click="irHome" class="nav-link text-truncate">
                        <i class="fs-5 bi-house"></i><span class="ms-1 d-none d-sm-inline">Inventario</span> </a>
                    </li>
                    <li>
                        <a href="#" @click="irCadastroColab" class="nav-link text-truncate">
                        <i class="fs-5 bi-person-plus"></i><span class="ms-1 d-none d-sm-inline">Cadastrar Colaboradores</span> </a>
                    </li>
                    <li>
                        <a href="#"  @click="irCadastroItem" class="nav-link text-truncate">
                        <i class="fs-5 bi-file-earmark-plus"></i><span class="ms-1 d-none d-sm-inline">Cadastrar Item</span></a>
                    </li>
                    <li>
                        <a href="#" @click="irEmprestimoItem" class="nav-link text-truncate">
                        <i class="fs-5 bi-grid"></i><span class="ms-1 d-none d-sm-inline">Emprestimos de Itens</span></a>
                    </li>
                    <li>
                        <a href="#" @click="irColaboradores" class="nav-link text-truncate">
                        <i class="fs-5 bi-people"></i><span class="ms-1 d-none d-sm-inline">Colaboradores</span> </a>
                    </li>
                    <li>
                        <button class="nav-link text-truncate" id="logOutTeste" @click="logOut">
                        <i class="fs-5 bi bi-door-open-fill"></i><span class="ms-1 d-none d-sm-inline">Sair</span> </button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div>
                    <button class="btn btn-dark float-end" id="buttonMenuToggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button"> MENU
                    </button>
                </div>
            </div>
        </div>
    </div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</div>
</template>

<script>
export default {
    name: "NavSideBar",
    data() {
        return {
            usuarioLogado: (localStorage.getItem("usuario")) ? JSON.parse(localStorage.getItem("usuario")) : { nameRegister: "Usuario" }
        }
    },
    methods: {
        logOut() {
            localStorage.removeItem('usuario');
            this.$router.push({name: "login" });
        },
        irHome() {
            this.$router.push({name: "INVENTARIO" })
        },
        irCadastroColab() {
            this.$router.push({name: "CADASTRO DE COLABORADORES" })
        },
        irCadastroItem() {
            this.$router.push({name: "CADASTRO DE ITENS" })
        },
        irEmprestimoItem () {
            this.$router.push({name: "EMPRESTIMO DE ITENS"})
        },
        irColaboradores () {
            this.$router.push({name: "COLABORADORES"})
        },
    },
        computed: {
            notIsLoginPage() {
                return (this.$route.name !== "login" & this.$route.name !== "register");
            }
        }
    }   
</script>

<style scoped>

#navDireito {
    padding-left: 125px;
}

.linknavUm {
    color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 25px;
    padding-left: 100px;
}

.linknavUm:hover{
    color:white
}

a:hover {
    color: rgb(212, 72, 53)
}

a {
    color: black
}

#logOutTeste{
    color: red;
}

#logOutTeste:hover {
    color: rgb(97, 3, 3)
}

#buttonMenuToggle{
    margin: 20px;
}

#buttonMenuToggle:hover{
    background-color: white;
    color: black
}

.userNameNav{
    color: white;
    padding-top: 15px;
}

.navbar {
    padding-right: 10px;
}

@media only screen and (max-width: 480px) {
    .linknavUm{
        margin-left: 10px;
        padding: 4px;
        font-size: 18px;
    }
    #navDireito{
        padding-left: 10px
    }
}

</style>