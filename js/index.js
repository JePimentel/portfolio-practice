const skills = document.querySelector('.skills')
const marketing = document.querySelector('#marketing')
const ui = document.querySelector('#ui')
const ux = document.querySelector('#ux')

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

