document.addEventListener("DOMContentLoaded", (event) => {
    buscarInscrito();
    construirModal();
    destruirModal();

    const localTheme = localStorage.getItem("theme");
    document.body.setAttribute("data-theme", localTheme);
})

function alterarTema() {
    const theme = document.body.getAttribute("data-theme");
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
    const btAlterarTema = document.getElementById("btAlterarTema");
    btAlterarTema.textContent = btAlterarTema.textContent == "Light" ? 'Dark' : 'Light';
}

function buscarInscrito() {
    fetch("json/inscritos.json").then(res => res.json()).then(res => {
        const divInscritos = document.getElementById("inscritos");
        res.forEach(user => {
            const novoParagrafo = document.createElement("p");
            novoParagrafo.textContent = `Nome: ${user.nome}`;
            divInscritos.appendChild(novoParagrafo);
        })
    }).catch(e => console.log(e));
}

let idiomaAtual = "pt";

function alterarIdioma() {
    idiomaAtual = idiomaAtual == "pt" ? "en" : "pt";
    carregarIdioma(idiomaAtual)
}

function carregarIdioma(idioma) {
    fetch(`json/${idioma}.json`)
        .then(data => data.json())
        .then(data => {
            traduzirPagina(data);
        })
}

function traduzirPagina(linguagem) {
    document.querySelectorAll("[data-i18n]").forEach(elemento=>{
        const chave = elemento.getAttribute("data-i18n");
        console.log(chave);
        if (linguagem[chave]) {
            elemento.textContent = linguagem[chave];
        }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(elemento=>{
        const chave = elemento.getAttribute("data-i18n-alt");
        console.log(chave);
        if (linguagem[chave]) {
            elemento.setAttribute("alt", linguagem[chave])
        }
    });

    
}

function construirModal() {
    const botaoSaibaMais = document.getElementById("saiba-mais");
    const modal = document.getElementById("modal");
    botaoSaibaMais.addEventListener("click", () => {
        modal.classList.remove("hidden");
    })

    window.addEventListener("click", (e) => {
        // console.log(e.target)
        if (e.target == modal) {

            modal.classList.add("hidden");
        }
    })
}

function destruirModal() {
    const xzinho = document.getElementById("fechar-modal");
    const modal = document.getElementById("modal");
    xzinho.addEventListener("click", () => {
        modal.classList.add("hidden")

    })
}