let nome = String(prompt("Qual o seu nome?"))
let nascimento = parseInt(prompt("Qual o ano de seu nascimento?"))
let anoAtual = new Date().getFullYear();
let idade = anoAtual - nascimento

if (idade >= 18) {
    alert("Bem vindo " +nome)

    let nomeUsuario = String(prompt("Qual nome de usuário você deseja?"))
    let senha = parseFloat(prompt("Qual a sua senha?"));

    let usuario = {nome, nomeUsuario, senha}

    console.log(usuario)
    console.log(JSON.stringify(usuario))
} else {
    alert("Você é menor de idade, proibido fazer login!!")
}