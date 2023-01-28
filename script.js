// Responsive Menu
topBar = document.getElementById('top-bar')
bottomBar = document.getElementById('bottom-bar')
responsiveMenu = document.getElementById('responsive-menu')
navMenu = document.getElementById('nav-menu')

// Log In Section Variables//
createAccountLink = document.querySelector('.create__account-link')
logInCard = document.querySelector('.right__side-card')
leftBanner = document.querySelector('.left__side-card')
createAccount = document.querySelector('.create__account-container')
backToLogin = document.querySelector('.back__to-login')


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
menuBtn = document.getElementById('menu-button')
menuPage = document.querySelector('.main__menu-container')
menuLnk = document.querySelectorAll('.menu__link')

foodMenu = document.querySelector('.food__menu-container')
foodLink = document.getElementById('food-link')

creationsMenu = document.querySelector('.creations__menu-container')
creationsLnk = document.getElementById('creations-link')

hotDrinksMenu = document.querySelector('.hotdrinks__menu-container')
hotDrinksLnk = document.getElementById('hot-drinks-lnk')

iceDrinksMenu = document.querySelector('.icedrinks__menu-container')
iceDrinksLnk = document.getElementById('ice-drinks-lnk')

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
    creationsMenu.classList.add('section__slide-in')
}

function revealHotDrinks() {
    hotDrinksMenu.classList.add('section__slide-in')
}

function revealIceDrinks() {
    iceDrinksMenu.classList.add('section__slide-in')
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

// function revealFoodResponive() {
//     foodMenu.classList.toggle('food__menu-active')
// }

// Log In Form Functionality//
createAccountLink.addEventListener('click', () => {
    logInCard.classList.toggle('card__switch-back')

    setTimeout( ()=> {
        leftBanner.classList.toggle('card__slide-right')
        createAccount.classList.toggle('inactive')
    }, 500)

    setTimeout( () => {
        createAccount.classList.toggle('z-index')
        backToLogin.classList.toggle('opacity')
    }, 1000)
})

backToLogin.addEventListener('click', () => {
    backToLogin.classList.toggle('opacity')
    createAccount.classList.toggle('z-index')
    leftBanner.classList.toggle('card__slide-right')
    logInCard.classList.toggle('card__switch-back')

    setTimeout( () => {
        // logInCard.classList.toggle('card__switch-back')
        createAccount.classList.toggle('inactive')
    }, 1000)
})
