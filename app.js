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
    0: "i will survive",
    1: "stand by me",
    2: "lift off",
    3: "cat in the hat",
    4: "ready or not",
    5: "fight club",
    6: "john cena",
    7: "doctor strange",
}

function randomPhrase() {
    let size = Object.keys(phraseList).length;
    return Math.floor(Math.random() * size)
}

function splitPhrase(i) {
    return phraseList[i].split('')
}

let currentPhrase = splitPhrase(randomPhrase())

// fill phrase
for (i = 0; i < currentPhrase.length; i++) {
    const newLi = document.createElement('li')
    newLi.className += 'letter'
    newLi.textContent = currentPhrase[i]

    if (currentPhrase[i] === ' ') {
        newLi.style.background = 'white'
    }

    phraseUl.appendChild(newLi)
}
