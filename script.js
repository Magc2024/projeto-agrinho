// Exibe informações sobre o projeto
function exibirInformacaoSobreMilho() {
    alert(
        "O milho pode ser transformado em bioplástico, contribuindo para soluções mais sustentáveis."
    );
}

// Registra interação do usuário
function registrarInteracao() {
    console.log("Informação sobre sustentabilidade exibida.");
}

// Controle do tamanho da fonte
let tamanhoFonte = 16;

function aumentarFonte() {
    tamanhoFonte += 2;
    document.body.style.fontSize = `${tamanhoFonte}px`;
}

function diminuirFonte() {
    if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = `${tamanhoFonte}px`;
    }
}

// Modo escuro
function alternarModoEscuro() {
    document.body.classList.toggle("modo-escuro");
}

// Leitura em voz alta
function lerConteudo() {
    const conteudo = document.getElementById("conteudoPrincipal");

    if (!conteudo) return;

    conteudo.scrollIntoView({
        behavior: "smooth"
    });

    const texto = conteudo.innerText;

    const leitura = new SpeechSynthesisUtterance(texto);
    leitura.lang = "pt-BR";

    speechSynthesis.cancel();
    speechSynthesis.speak(leitura);
}

// Configuração dos eventos
function configurarEventos() {
    const botaoSaibaMais = document.getElementById("btnSaibaMais");
    const btnAumentarFonte = document.getElementById("btnAumentarFonte");
    const btnDiminuirFonte = document.getElementById("btnDiminuirFonte");
    const btnModoEscuro = document.getElementById("btnModoEscuro");
    const btnLeitura = document.getElementById("btnLeitura");

    if (botaoSaibaMais) {
        botaoSaibaMais.addEventListener("click", () => {
            exibirInformacaoSobreMilho();
            registrarInteracao();
        });
    }

    btnAumentarFonte?.addEventListener("click", aumentarFonte);
    btnDiminuirFonte?.addEventListener("click", diminuirFonte);
    btnModoEscuro?.addEventListener("click", alternarModoEscuro);
    btnLeitura?.addEventListener("click", lerConteudo);
}

document.addEventListener("DOMContentLoaded", configurarEventos);
