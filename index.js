const hamburgerIcon = document.querySelector('.menu__hamburger_icon')
const menuContainer = document.querySelector('.menu__container2')
// console.log(menuBars)
hamburgerIcon.addEventListener('click', function () {
    menuContainer.classList.toggle('menu__container2--active')
})