const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const overlay = document.querySelector('#overlay');
const startButton = document.querySelector('.btn__reset');
const phraseUL = document.querySelector('#phrase ul');
const keyboard = document.querySelector('#qwerty');
const heartList = document.querySelector('#scoreboard ol');
const heartArray = document.querySelectorAll('.tries img');
const heart = document.querySelector('.tries img');

let missed = 0;
let phrases = ['heart of gold',
			   'love is blind',
			   'cool as a cucumber',
			   'bring home the bacon',
			   'saved by the bell',
			   'dressed to the nines'];

startButton.addEventListener('click', () => {
	if (startButton.textContent === 'Start Game') {
		startGame();
		overlay.style.display = 'none';	
	} else {
		resetGame();
		startGame();
		overlay.style.display = 'none';
	}
});

const getRandomPhrasesAsArray = arr => {    // phraseList
    const random = Math.floor(Math.random() * arr.length)
    const randomPhrase = arr[random]
    const characters = randomPhrase.split('')
    return characters
}

