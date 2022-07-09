const hamburgur = document.querySelector('.header .nav-bar .nav-list .hamburgur');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburgur.addEventListener('click', () => {
    hamburgur.classList.toggle('active');
    mobile_menu.classList.toggle('active');
} );

menu_item.forEach ((item) => {
    item.addEventListener('click', () => {
        hamburgur.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    });
});