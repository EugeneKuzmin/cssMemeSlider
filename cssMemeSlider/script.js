const descriptions = ['one','two','three','four']
const descriptionContainer = document.querySelector('[data-meme-text]')

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
        dots[activeIndex].querySelector('.dot-button').classList.remove('active')
        dot.querySelector('.dot-button').classList.add('active')
        activeIndex = index
        descriptionContainer.textContent = getDescription(index)
        descriptionContainer.classList.add('text-translate')
        window.setTimeout(()=>{descriptionContainer.classList.remove('text-translate')},800)
        
    }
    )
})