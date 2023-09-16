const descriptions = ['one','two','three','four']
const textDescription = document.querySelector('[data-meme-text]')

const carousel = document.getElementById('carousel')

const picClass = document.querySelectorAll('.card__img')[0]
const picWidth = picClass.clientWidth

let activeIndex = 0

const scrollWidth = carousel.scrollWidth - carousel.clientWidth

const dots = document.querySelectorAll('.dot')

const getDescription = (index) => {
    return descriptions[index]
}

dots.forEach((dot,index)=>{
    dot.addEventListener('click',()=>{
        carousel.scrollLeft = picWidth*index
        dots[activeIndex].classList.remove('active')
        dot.classList.add('active')
        activeIndex = index
        textDescription.textContent = getDescription(index)
    }
    )
})