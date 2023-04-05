class HiddenElement {
    constructor(el) {
        this.el = el
        // сразу скрываем элемент
        this.isVisible = false
        this.el.style.display = 'none'
    }

    toggleVisible() {
        this.isVisible = !this.isVisible
        this.el.style.display = this.isVisible ? 'block' : 'none'
    }
}

const appContainer = document.getElementById('app')

const subscribeForm = new HiddenElement(
    document.querySelector('.subscribe__form-wrapper')
)

const pageLoading = new HiddenElement(
    document.querySelector('.loading-page')
)

document.querySelector('.accordion').addEventListener('click', () => {
    subscribeForm.toggleVisible()
    // скроллим вниз
    if (subscribeForm.isVisible)
        window.scrollTo(0, document.body.scrollHeight)
})

document.querySelector('.subscribe__form').addEventListener('submit', event => {
    event.preventDefault()

    // показываем лоадинг
    pageLoading.toggleVisible()
    appContainer.className = 'is-loading'

    // через некоторое время убираем лоадинг и редиректим
    setTimeout(() => {
        pageLoading.toggleVisible()
        appContainer.classList.remove('is-loading')
        window.location = 'https://www.amd.com/en/preferences/sign-up/thank-you.html'
    }, 2000)
})
