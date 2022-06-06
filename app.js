const qwerty = document.getElementById('qwerty')
const phrase = document.getElementById('phrase')
const phraseUl = document.querySelector('.phraseUl')
const overlay = document.getElementById('overlay')


const startButton = document.querySelector('.btn__reset')

let missed = 0

const phraseList = [
    "i will survive",
    "stand by me",
    "lift off",
    "cat in the hat",
    "ready or not",
    "fight club",
    "john cena",
    "doctor strange",
]
// getrandom phrase,
//then turn phrase into array of letters
const getRandomPhrasesAsArray = arr => {    // phraseList
    function random(arr) {
        return Math.floor(Math.random() * arr.length)
    }
    let currentPhrase = phraseList[random(phraseList)].split('')
    return currentPhrase
}

// create li, store getRan in li, add class
const addPhraseToDisplay = arr => { 
    for (i = 0; i < arr.length; i++) {
        const newLi = document.createElement('li')
        if (arr[i] === ' ') {
            newLi.className += 'space'
            phraseUl.appendChild(newLi)
        } else {
            newLi.className += 'letter'
            newLi.textContent = arr[i]
            phraseUl.appendChild(newLi)
        }
    }
}
addPhraseToDisplay(getRandomPhrasesAsArray(phraseList))

const checkLetter = button => {
    
}

const checkWin = () => {
    
}

startButton.addEventListener('click', () => {
    overlay.style.display = 'none'
})

qwerty.addEventListener('click', e => {
    
})