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

const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');
const menuLinks = sideMenu.querySelectorAll('a');

// Função para abrir o menu
function openSideMenu() {
  sideMenu.style.width = '250px';
  overlay.style.display = 'block';
}

// Função para fechar o menu
function closeSideMenu() {
  sideMenu.style.width = '0';
  overlay.style.display = 'none';
}

// Eventos
openMenu.addEventListener('click', openSideMenu);
closeMenu.addEventListener('click', closeSideMenu);
overlay.addEventListener('click', closeSideMenu);

// Fechar o menu quando clicar em qualquer link
menuLinks.forEach(link => {
  link.addEventListener('click', closeSideMenu);
});
