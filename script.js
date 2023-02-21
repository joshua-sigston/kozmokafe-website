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
const menuBtn = document.querySelectorAll('.menu_btn')
const menuPage = document.querySelector('.main__menu-container')
const menuLink = document.querySelectorAll('.menu__link')
const menu = document.querySelectorAll('.menu')

const foodMenu = document.querySelector('.food__menu-container')
const foodLink = document.getElementById('food-link')

const creationsMenu = document.querySelector('.creations__menu-container')
const creationsLnk = document.getElementById('creations-link')

const hotDrinksMenu = document.querySelector('.hotdrinks__menu-container')
const hotDrinksLnk = document.getElementById('hot-drinks-lnk')

const back = document.querySelectorAll('.back_btn_container')

const subTitle = document.querySelectorAll('.sub_title')
const itemsContainer = document.querySelectorAll('items_container')

// Food and Drink Menu Functionality //
function removeMenu() {
    menuPage.classList.toggle('section__slide-out')
}

menuLink.forEach( link => {
    link.addEventListener('click', () => {
        removeMenu()
        console.log('asfas')
    })
})

menuBtn.forEach( btn => {
    btn.addEventListener('click', () => {
        menu.forEach(item => {
            if(item.classList.contains('section__slide-in')){
                item.classList.remove('section__slide-in')
            }
        })
    })
})

function revealFood() {
    foodMenu.classList.toggle('section__slide-in')
}

function revealCreations() {
    creationsMenu.classList.toggle('section__slide-in')
}

function revealHotDrinks() {
    hotDrinksMenu.classList.toggle('section__slide-in')
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

const iceDrinksMenu = document.querySelector('.icedrinks__menu-container')
const iceDrinksLnk = document.getElementById('ice-drinks-lnk')

function revealIceDrinks() {
    iceDrinksMenu.classList.toggle('section__slide-in')
}

iceDrinksLnk.addEventListener('click', () => {
    console.log(iceDrinksLnk)
    revealIceDrinks()
    removeMenu()
})

back.forEach( (btn) => 
    btn.addEventListener('click', () => {
        console.log(btn)
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

