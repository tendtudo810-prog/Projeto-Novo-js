//banco de dados
const nomeUsuario1 = "user1@gmail.com"
const senhaUsuario1 = "123456"
const nomeUsuario2 = "user2@gmail.com"
const senhaUsuario2 = "123456"

//Capturar o formulário
document.getElementById("form-login").addEventListener("submit", function(e) {
    e.preventDefault();
    
    //Obter valores dos inputs
    let nomeDigitado = document.getElementById("nome").value;
    let senhaDigitada = document.getElementById("senha").value;
    let idade = parseInt(document.getElementById("idade").value);
    
    //Verificação de idade
    if(idade < 18) {
        alert("Você não tem a idade mínima necessária para entrar neste site!");
        document.body.classList.add("acesso-negado");
        return;
    }
    
    //Verificação de login 
    if(nomeDigitado === nomeUsuario1 && senhaDigitada === senhaUsuario1) {
        alert("Login bem-sucedido! Bem-vindo, " + nomeUsuario1 + "!");
    } else if(nomeDigitado === nomeUsuario2 && senhaDigitada === senhaUsuario2) {
        alert("Login bem-sucedido! Bem-vindo, " + nomeUsuario2 + "!");
    } else {
        alert("Login falhou! Email ou senha incorretos.");
        document.body.classList.add("acesso-negado");
    }
});
