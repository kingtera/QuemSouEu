const inicialWrapper = document.querySelector(".contextGroup")
const categories = document.querySelector(".categoriesDisplay")
const buttonPlay = document.querySelector(".play")
const buttonReturn = document.querySelector(".returnButton")

buttonPlay.addEventListener('click', function() {
    inicialWrapper.classList.add('hide')
    categories.classList.remove('hide')
})

buttonReturn.addEventListener('click', function() {
    inicialWrapper.classList.remove('hide')
    categories.classList.add('hide')
})