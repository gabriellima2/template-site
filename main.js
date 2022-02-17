// Animar Introdução
window.addEventListener('load', () => {
    const introducao = document.querySelector('#introducao');
    introducao.classList.add('animate');
});


// Animar Menu
function activationMenu() {
    const areaMenu = document.querySelector('#menu');
    areaMenu.classList.toggle(classValue);

    const listaMenu = document.querySelector('#lista-links');
    listaMenu.classList.toggle(classValue);

    btnMenu.classList.toggle(classValue);

    animateMenuItems();
};

function animateMenuItems() {
    const itensMenu = document.querySelectorAll('.lista-links-item');

    itensMenu.forEach( (item, index) => {
        item.style.animation = item.style.animation ? '' : `animateItems 0.6s ease forwards ${ index / 4 }s`;
    });
}

const classValue = 'active';
const btnMenu = document.querySelector('#hamburguer');
btnMenu.addEventListener('click', () => {
    activationMenu();
});

window.addEventListener('scroll', () => {
    if ( btnMenu.classList.contains(classValue) ) {
        activationMenu();
    };
});
