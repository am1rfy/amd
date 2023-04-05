const navLinks = document.querySelectorAll(
    '.common-header .nav .nav__item'
)

for (const [index, item] of navLinks.entries()) {
    // уникальный ключ каждой ссылки
    item.id = index + 1
    
    // флаг активна/не активна ссылка в данный момент
    item.isActive = false

    // метод который переключает состояние ссылки 
    // и добавляет ей соответствующий стиль
    item.setActive = function (isActive) {
        this.isActive = isActive
        this.style['border-bottom'] = this.isActive
            ? '2px solid white'
            : '2px solid transparent'
    }

    // вешаем обработчик события клика по ссылке
    item.addEventListener('click', event => {
        // ссылка на которую тыкнули (текущая)
        const currNavLink = event.target
        
        for (const navLink of navLinks) {
            // переключаем состояние текущей ссылки
            if (navLink.id === currNavLink.id) {
                currNavLink.setActive(!currNavLink.isActive)
                continue
            }
            // остальные же делаем неактивными
            navLink.setActive(false)
        }
    })
}
