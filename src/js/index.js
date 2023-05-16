
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");
console.log(body);

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    //toggle: alterna determinada função, nesse caso entre modo escuro ou nao
    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivo) {

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")

    }

});

