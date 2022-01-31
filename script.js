var click = document.getElementById("click_div")
var pres = document.getElementById("pres")
var span1 = document.getElementById("span1")
var span2 = document.getElementById("span2")
var span3 = document.getElementById("span3")
var portfolio = document.getElementById("portfolio")
var cross = document.getElementById("cross")
var about = document.getElementById("about")
var social_networks = document.getElementById("social_networks")



click.addEventListener('click',function(){
    span1.style.height = "100%"
    span2.style.height = "100%"
    span3.style.height = "100%"
    about.style.visibility = "visible"
    portfolio.style.transform = "translateX(800px)"
    social_networks.style.transform = "translateX(-800px)"
    cross.style.visibility = "visible"
    about.style.transitionDelay = "1.2s"
})
cross.addEventListener('click',function(){
    span1.style.height = "0%"
    span2.style.height = "0%"
    span3.style.height = "0%"
    about.style.visibility = "hidden"
    portfolio.style.transform = "translateX(0px)"
    social_networks.style.transform = "translateX(0px)"
    cross.style.visibility = "hidden"
    about.style.transitionDelay = "0s"
})


const slider = document.querySelector('#slider-container'),
    slides = Array.from(document.querySelectorAll('.slide'))

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID,
    currentIndex = 0

slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img')
  // disable default image drag
    slideImage.addEventListener('dragstart', (e) => e.preventDefault())
  // touch events
    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', touchMove)
  // mouse events
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mousemove', touchMove)
    slide.addEventListener('mouseleave', touchEnd)
})

// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex)

// prevent menu popup on long press
window.oncontextmenu = function (event) {
    event.preventDefault()
    event.stopPropagation()
    return false
}

function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function touchStart(index) {
        return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true
    animationID = requestAnimationFrame(animation)
    slider.classList.add('grabbing')
        }
}

function touchMove(event) {
        if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
        }
}

function touchEnd() {
    cancelAnimationFrame(animationID)
    isDragging = false
    const movedBy = currentTranslate - prevTranslate

  // if moved enough negative then snap to next slide if there is one
    if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  // if moved enough positive then snap to previous slide if there is one
    if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

    setPositionByIndex()

    slider.classList.remove('grabbing')
}

function animation() {
    setSliderPosition()
    if (isDragging) requestAnimationFrame(animation)
}

function setPositionByIndex() {
    currentTranslate = currentIndex * -window.innerWidth
    prevTranslate = currentTranslate
    setSliderPosition()
}

function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`
}
