
let tamanhoFonte = 100;

function aumentarFonte() {
    if (tamanhoFonte < 150) {
        tamanhoFonte += 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
}

function diminuirFonte() {
    if (tamanhoFonte > 70) {
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
}

function alternarContraste() {
    document.body.classList.toggle("alto-contraste");

    const botao = document.querySelector(
        ".acessibilidade button:last-child"
    );

    const contrasteAtivo = document.body.classList.contains(
        "alto-contraste"
    );

    botao.setAttribute("aria-pressed", contrasteAtivo);
}

