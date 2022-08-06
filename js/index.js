const skills = document.querySelector('.skills')
const marketing = document.querySelector('#marketing')
const ui = document.querySelector('#ui')
const ux = document.querySelector('#ux')
const menuIcon = document.querySelector('#menuIcon')
const navMenu = document.querySelector('.navMenu')
const main = document.querySelector('#main')
const sections = document.querySelectorAll('#sections')

const loading = (entries, observer) => {
    if (entries[0].isIntersecting) {
        marketing.classList.add('marketingProgress')
        ui.classList.add('uiProgress')
        ux.classList.add('uxProgress')
    }
}

const observer = new IntersectionObserver(loading, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
})

observer.observe(skills)

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('menuOpen')
    main.classList.toggle('mainBlur')
})

sections.forEach(section => {
    section.addEventListener('click', () => {
        navMenu.classList.remove('menuOpen')
        main.classList.remove('mainBlur')
    })
})



 