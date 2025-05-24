document.addEventListener("DOMContentLoaded", function () {
  const botao1 = document.getElementById("btn1");
  const botao2 = document.getElementById("btn2");
  const botao3 = document.getElementById("btn3");

  const titulo = document.getElementById("titulo-comentario");
  const texto = document.getElementById("texto-comentario");
  const imagem = document.getElementById("imagem-comentario");

  const conteudos = {
    opcao1: {
      titulo: "Comentário Motivacional",
      texto: "Acredite em si mesmo. Mesmo quando ninguém acreditar, você precisa continuar. O sucesso começa com um pensamento positivo e determinação inabalável.",
      imagem: "img/mushoku.jpg"
    },
    opcao2: {
      titulo: "Comentário Informativo",
      texto: "O HTML é a linguagem de marcação usada para estruturar páginas da web. Ele define o conteúdo, enquanto o CSS estiliza e o JavaScript traz a interatividade.",
      imagem: "img/mushoku2.jpg"
    },
    opcao3: {
      titulo: "Comentário Curioso",
      texto: "Você sabia que o polvo tem três corações e que dois deles param de bater quando ele nada? A natureza é tão fascinante quanto imprevisível.",
      imagem: "img/hxh.jpg"
    }
  };

  function atualizarConteudo(opcao) {
    const conteudo = conteudos[opcao];
    if (conteudo) {
      titulo.textContent = conteudo.titulo;
      texto.textContent = conteudo.texto;
      imagem.setAttribute("src", conteudo.imagem);
      imagem.setAttribute("alt", conteudo.titulo);
    } else {
      console.warn("Opção inválida: ", opcao);
    }
  }

  botao1.addEventListener("click", function () {
    atualizarConteudo("opcao1");
  });

  botao2.addEventListener("click", function () {
    atualizarConteudo("opcao2");
  });

  botao3.addEventListener("click", function () {
    atualizarConteudo("opcao3");
  });

  atualizarConteudo("opcao1");
});
