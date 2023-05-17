const registerForm = document.querySelector('.auth-form')

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
const pageLoading = new HiddenElement(
    document.querySelector('.loading-page')
)

const startLoading = () => {
    pageLoading.toggleVisible()
    appContainer.className = 'is-loading'
}

const endLoading = () => {
    pageLoading.toggleVisible()
    appContainer.classList.remove('is-loading')
}

registerForm.addEventListener('submit', async event => {
    event.preventDefault()
    const formData = new FormData(registerForm)

    const jsonData = JSON.stringify({
        username: formData.get('username'),
        password: formData.get('password')
    })

    startLoading()
    const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: jsonData,
        headers: { 'Content-Type': 'application/json' },
    })
    endLoading()

    const isSuccess = response.status >= 200 && response.status <= 300 
    const result = await response.json()
    
    if (isSuccess) {
        console.log(result.message)
        localStorage.setItem('token', result.token)
        window.location.href = '/'
    }
})