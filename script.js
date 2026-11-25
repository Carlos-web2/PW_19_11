
const contadorElemento = document.getElementById("contador");
const botao = document.getElementById("botao");
const botaoResetar = document.getElementById("resetar");
const mensagem = document.getElementById("mensagem");

let contador = 0;

function aumentarContador() {
    contador++;

    contadorElemento.textContent = contador;

    mensagem.textContent = "Você clicou " + contador +
        (contador === 1 ? " vez!" : " vezes!");
}

function reiniciarContador() {
    contador = 0;

    contadorElemento.textContent = contador;

    mensagem.textContent =
        "O contador foi reiniciado. Clique para começar novamente!";
}

botao.addEventListener("click", aumentarContador);

botaoResetar.addEventListener("click", reiniciarContador);
