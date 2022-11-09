// mutation para registrar a conta. 
function salvarDados(state, values) {
    console.log(values)
    let a = new Date()
    values["token"] = Date.parse(a)
    values["status"] = "off"
    let users = (localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    users = [...users, values]
    localStorage.setItem("users", JSON.stringify(users));
    alert("CONTA CRIADA COM SUCESSO!")
}



// mutation para logar
function Login(state, values) {
    let user = values;
    let users = JSON.parse(localStorage.getItem("users"));
    users.forEach(function(item){ if (item.emailRegister === user.email && item.passwordRegister === user.password) {
        let usuario = item
        usuario["status"] = "logado"
        localStorage.setItem("usuario", JSON.stringify(usuario))
        alert("Logado com sucesso!")
    }})

    let usuario = (localStorage.getItem("usuario")) ? JSON.parse(localStorage.getItem("usuario")) : {status: "off"}
    if (usuario.status === "logado") {
        return window.location.href = "/";
    } else {
        alert("Conta não cadastrada!")
        location.reload()
    }
}

export { salvarDados, Login };