// Overlay & Start
const start = document.querySelector('.btn__reset')
const overlay = document.getElementById('overlay')

const qwerty = document.getElementById('qwerty')
const phrase = document.getElementById('phrase')
const phraseUl = document.querySelector('.phraseUl')


start.addEventListener('click', (e) => {
    overlay.style.display = 'none'
})

const phraseList = {
    0: "monkey see",
    1: "stand by me",
    2: "lift off",
    3: "cat in the hat",
}

function splitPhrase(i) {
    return phraseList[i].split('')
}

let currentPhrase = splitPhrase(0)

for (i = 0; i < currentPhrase.length; i++) {
    const newLi = document.createElement('li')
    newLi.className += 'letter'
    newLi.textContent = currentPhrase[i]
    if (currentPhrase[i] === ' ') {
        currentPhrase[i].style.background = 'white'
    }

    phraseUl.appendChild(newLi)
}
