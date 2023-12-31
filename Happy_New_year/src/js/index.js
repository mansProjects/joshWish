const incredible = document.querySelector('.incredible')
const main = document.querySelector('main .main')

setTimeout(() => {
    incredible.classList.add('none')
    main.classList.add('incredible')
}, 20000);