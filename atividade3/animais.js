class Animal {
    constructor(patas, olhos) {
        this.patas = patas;
        this.olhos = olhos;
    }
}

class Cachorro extends Animal {
    constructor(patas, olhos, raca, cor, imagem) {
        super(patas, olhos);
        this.raca = raca;
        this.cor = cor;
        this.imagem = imagem;
    }
   descricao() {
  return `
    <h2>${this.raca}</h2>
    <p>Cor: ${this.cor}</p>
    <p>Patas: ${this.patas}</p>
    <p>Olhos: ${this.olhos}</p>
    <img src="imagens/${this.imagem}" alt="${this.raca}" width="300">
  `;
}
}

const cachorros = {
    golden: {
        raca: "Golden",
        cor: "Amarelo",
        patas: 4,
        olhos: 2,
        imagem: "golden.webp"
    },
    pastor_alemao: {
        raca: "Pastor Alemão",
        cor: "Castanho",
        patas: 4,
        olhos: 2,
        imagem: "pastor_alemao.jpg"
    },
    pug: {
        raca: "Pug",
        cor: "Branco",
        patas: 4,
        olhos: 2,
        imagem: "pug.jpg"

    },
    pitbull: {
        raca: "PitBull",
        cor: "cinza",
        patas: 4,
        olhos: 2,
        imagem: "pitbull.jpg"
    }
}

function gerarCachorro(){
    const racaSelecionada = document.getElementById("raca").value;
    const corSelecionada = document.getElementById("cor").value;

    const dados = cachorros[racaSelecionada];

    const cachorro = new Cachorro(dados.patas, dados.olhos, dados.raca, corSelecionada, dados.imagem);

   document.getElementById("descricao").innerHTML = cachorro.descricao();
}

//Roberto e Agatha