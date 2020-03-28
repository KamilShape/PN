const hamburgerIcon = document.querySelector('.menu__hamburger_icon')
const menuContainer = document.querySelector('.menu__container2')
const topBar = document.querySelector('.menu__hamburger_bar_top')
const middleBar = document.querySelector('.menu__hamburger_bar_middle')
const bottomBar = document.querySelector('.menu__hamburger_bar_bottom')
console.log(hamburgerIcon)
hamburgerIcon.addEventListener('click', function () {
    menuContainer.classList.toggle('menu__container2--active')
    topBar.classList.toggle('menu__hamburger_bar_top--active')
    bottomBar.classList.toggle('menu__hamburger_bar_bottom--active')
    middleBar.classList.toggle('menu__hamburger_bar--active')

})