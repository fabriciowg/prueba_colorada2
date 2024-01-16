const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-navegacion');

menu.addEventListener('click', ()=> {
    menuNav.classList.toggle("spread")
})

window.addEventListener('click', e => {
    if (menuNav.classList.contains('spread')
        && e.target != menuNav && e.target != menu) {
        menuNav.classList.toggle("spread")
    }
})
