document.addEventListener("DOMContentLoaded", (event)=>{
    buscarInscrito();
})

function alterarTema() {
    const theme = document.body.getAttribute("data-theme");
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute("data-theme", newTheme);

    const btAlterarTema = document.getElementById("btAlterarTema");
    btAlterarTema.textContent = btAlterarTema.textContent == "Light" ? 'Dark' : 'Light';
}

function buscarInscrito() {
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(res => {
        const divInscritos = document.getElementById("inscritos");
        res.forEach(user => {
            const novoParagrafo = document.createElement("p");
            novoParagrafo.textContent = `Nome: ${user.name}`;
            divInscritos.appendChild(novoParagrafo);
        })
    }).catch(e=>console.log(e));
}