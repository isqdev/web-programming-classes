document.addEventListener("DOMContentLoaded", (event) => {
    const localTheme = localStorage.getItem("theme");
    document.body.setAttribute("data-theme", localTheme);
})

function changeTheme() {
    const theme = document.body.getAttribute("data-theme");
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
    const btAlterarTema = document.getElementById("theme");
    btAlterarTema.textContent = btAlterarTema.textContent == "Light" ? 'Dark' : 'Light';
}

let idiomaAtual = "pt";

function changeLanguage() {
    idiomaAtual = idiomaAtual == "pt" ? "en" : "pt";
    loadLanguage(idiomaAtual)
}

function loadLanguage(idioma) {
    fetch(`assets/${idioma}.json`)
        .then(data => data.json())
        .then(data => {
            translate(data);
        })
}

function translate(linguagem) {
    document.querySelectorAll("[data-i18n]").forEach(elemento=>{
        const chave = elemento.getAttribute("data-i18n");
        console.log(chave);
        if (linguagem[chave]) {
            elemento.textContent = linguagem[chave];
        }
    });

    const btnLanguage = document.getElementById("lang");
    btnLanguage.textContent = btnLanguage.textContent == "pt" ? "en" : "pt";

    document.querySelectorAll("[data-i18n-alt]").forEach(elemento=>{
        const chave = elemento.getAttribute("data-i18n-alt");
        console.log(chave);
        if (linguagem[chave]) {
            elemento.setAttribute("alt", linguagem[chave])
        }
    });

    
}