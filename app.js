const qwerty = document.getElementById('qwerty')
const phrase = document.getElementById('phrase')
const phraseUl = document.querySelector('.phraseUl')
const overlay = document.getElementById('overlay')


const startButton = document.querySelector('.btn__reset')
startButton.addEventListener('click', () => {
    overlay.style.display = 'none'
})

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
let currentPhrase

const getRandomPhrasesAsArray = arr => {    // phraseList
    function random(arr) {
        return Math.floor(Math.random() * arr.length)
    }
    currentPhrase = phraseList[random(phraseList)].split('')
    return currentPhrase
}
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
    let match 
    const lis = document.getElementsByTagName('li')
    for (i = 0; i < currentPhrase.length; i++) {
        if (button === lis[i].textContent) {
            lis[i].className += 'show'
            match = true
        } else {
            match = false
        }
    }
    return match
}

qwerty.addEventListener('click', e => {
    const btn = e.target
    const btnLetter = btn.textContent
    if (btn.tagName === 'BUTTON') {
        btn.className += 'chosen'
        let check = checkLetter(btnLetter)
        if (check === false) {
            missed++
            console.log(missed); // this is where im at!
            btn.style.background = '#ff931f'
        } else {
            btn.style.background = ''
        }
    }
})

const checkWin = () => {
    
}