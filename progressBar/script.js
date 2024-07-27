const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActiv = 1

next.addEventListener('click', () => {
    currentActiv++

    if(currentActiv > circles.length) {
        currentActiv = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActiv--

    if(currentActiv < 1) {
        currentActiv = 1
    }

    update()
})

function update() {
    circles.forEach( (circle, idx) => {
        if(idx < currentActiv){
            circle.classList.add('active')
        }else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length-1) / (circles.length-1) * 100 + '%'

    if(currentActiv === 1) {
        prev.disabled = true
    } else if(currentActiv === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}