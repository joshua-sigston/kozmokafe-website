// Responsive Menu
topBar = document.getElementById('top-bar')
bottomBar = document.getElementById('bottom-bar')
responsiveMenu = document.getElementById('responsive-menu')
navMenu = document.getElementById('nav-menu')


//  Responsive Nav Menu //
responsiveMenu.addEventListener('click', () => {
    topBar.classList.toggle('top__active')
    bottomBar.classList.toggle('bottom__active')
    navMenu.classList.toggle('nav__active')
})

responsiveMenu.addEventListener('mouseover',  () => {
    navMenu.classList.add('nav__transition')
})

responsiveMenu.addEventListener('mouseout',  () => {
    navMenu.classList.remove('nav__transition')
})

// Menu Variables
const menuBtn = document.getElementById('menu-button')
const menuPage = document.querySelector('.main__menu-container')
const menuLnk = document.querySelectorAll('.menu__link')

const foodMenu = document.querySelector('.food__menu-container')
const foodLink = document.getElementById('food-link')

const creationsMenu = document.querySelector('.creations__menu-container')
const creationsLnk = document.getElementById('creations-link')

const hotDrinksMenu = document.querySelector('.hotdrinks__menu-container')
const hotDrinksLnk = document.getElementById('hot-drinks-lnk')

const iceDrinksMenu = document.querySelector('.icedrinks__menu-container')
const iceDrinksLnk = document.getElementById('ice-drinks-lnk')

const back = document.querySelectorAll('.back_container')
const menu = document.querySelectorAll('.menu')

const subTitle = document.querySelectorAll('.sub_title')
const itemsContainer = document.querySelectorAll('items_container')

// Menu Functionality //
menuLnk.forEach( link => {
    link.addEventListener('click', () => {
        removeMenu()
    })
})

menuBtn.addEventListener('click', () => {
    foodMenu.classList.remove('section__slide-in')
    creationsMenu.classList.remove('section__slide-in')
    menuPage.classList.remove('section__slide-out')
    hotDrinksMenu.classList.remove('section__slide-in')
    iceDrinksMenu.classList.remove('section__slide-in')
})

function removeMenu() {
    menuPage.classList.toggle('section__slide-out')
}

function revealFood() {
    foodMenu.classList.toggle('section__slide-in')
}

function revealCreations() {
    creationsMenu.classList.toggle('section__slide-in')
}

function revealHotDrinks() {
    hotDrinksMenu.classList.toggle('section__slide-in')
}

function revealIceDrinks() {
    iceDrinksMenu.classList.toggle('section__slide-in')
}

foodLink.addEventListener('click', () => {
    revealFood()
    removeMenu()
    // revealFoodResponive()
})

creationsLnk.addEventListener('click', () => {
    revealCreations()
    removeMenu()
})

hotDrinksLnk.addEventListener('click', () => {
    revealHotDrinks()
    removeMenu()
})

iceDrinksLnk.addEventListener('click', () => {
    revealIceDrinks()
    removeMenu()
})

back.forEach( (btn) => 
    btn.addEventListener('click', () => {
        menu.forEach( (item) => {
            if (item.classList.contains('section__slide-in')) {
                item.classList.remove('section__slide-in')
            }
        })
    })
)

subTitle.forEach( (item) => 
    item.addEventListener('click', () => {
        item.nextElementSibling.classList.toggle('inactive')
    }))

