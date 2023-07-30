// Responsive Menu
topBar = document.getElementById('top-bar')
bottomBar = document.getElementById('bottom-bar')
responsiveMenu = document.getElementById('responsive-menu')
navMenu = document.getElementById('mobile-nav')
navItem = document.querySelectorAll('.nav_item')

//  Responsive Nav Menu //
responsiveMenu.addEventListener('click', () => {
    topBar.classList.toggle('top__active')
    bottomBar.classList.toggle('bottom__active')
    navMenu.classList.toggle('nav__active')
})

responsiveMenu.addEventListener('click',  () => {
    navMenu.classList.toggle('nav_transition')
})

navItem.forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.toggle('nav_transition')
    })
})

// Menu Variables
const back = document.querySelectorAll('.back')
const menu = document.querySelectorAll('.menu')

const foodLink = document.getElementById('food-link')
const foodMenu = document.getElementById('food-menu')

const hotDrinksLink = document.getElementById('hot-drinks-lnk')
const hotDrinksMenu = document.getElementById('hot-drinks-menu')

const icedDrinksLink = document.getElementById('iced-drinks-lnk')
const icedDrinksMenu = document.getElementById('iced-drinks-menu')

foodLink.addEventListener('click', () => {
    foodMenu.classList.add('toggle_menu')
})

hotDrinksLink.addEventListener('click', () => {
    hotDrinksMenu.classList.add('toggle_menu')
})

icedDrinksLink.addEventListener('click', () => {
    icedDrinksMenu.classList.add('toggle_menu')
})

back.forEach( (btn) => {
   btn.addEventListener('click', () => {
    menu.forEach( (container) => {
        if(container.classList.contains('toggle_menu')){
            container.classList.remove('toggle_menu')
        }
    })
   })  
})

