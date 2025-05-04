const palavras = ["grau", "javascript", "forca", "tecnico", "programador", "java", "facebook", "minecraft", "mesa"] ;
let palavraAtual = "";
let letrasCorretas = [];
let letrasErradas = [];
let tentativasRestantes = 6;

function escolherPalavra() {
  const index = Math.floor(Math.random() * palavras.length);
  palavraAtual = palavras[index];
  letrasCorretas = [];
  letrasErradas = [];
  tentativasRestantes = 6;
  atualizarTela();
}

function atualizarTela() {
  const display = palavraAtual
    .split("")
    .map(letra => letrasCorretas.includes(letra) ? letra : "_")
    .join(" ");
  document.getElementById("palavra-secreta").textContent = display;
  document.getElementById("letras-erradas").textContent = letrasErradas.join(", ");
  document.getElementById("tentativas").textContent = tentativasRestantes;
  document.getElementById("mensagem").textContent = "";
}

function verificarLetra() {
  const input = document.getElementById("letra");
  const letra = input.value.toLowerCase();
  input.value = "";

  if (!letra || letra.length !== 1 || !/^[a-záéíóúâêîôûãõç]$/i.test(letra)) return;

  if (letrasCorretas.includes(letra) || letrasErradas.includes(letra)) {
    alert("Letra já usada!");
    return;
  }

  if (palavraAtual.includes(letra)) {
    letrasCorretas.push(letra);
  } else {
    letrasErradas.push(letra);
    tentativasRestantes--;
  }

  atualizarTela();
  verificarFimDeJogo();
}

function verificarFimDeJogo() {
  const venceu = palavraAtual.split("").every(letra => letrasCorretas.includes(letra));
  if (venceu) {
    desativarJogo()
    document.getElementById("mensagem").textContent = "Você venceu!!"
    console.log("Você venceu!!")
  } else if (tentativasRestantes === 0) {
    console.log ("Você perdeu!!")
    document.getElementById("mensagem").textContent = "Você perdeu!!"
    mensagem.classList.add("derrota")
    desativarJogo();
  }
}

function desativarJogo() {
  document.getElementById("letra").disabled = true;
}

function novoJogo() {
  document.getElementById("letra").disabled = false;
  escolherPalavra();
}

escolherPalavra();

//Roberto, Agatha, Victor