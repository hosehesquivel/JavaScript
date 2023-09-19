import { wordArray } from '/words.js';

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('characterAmountNumber');
const rangeEl = document.getElementById('characterAmountRange');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');
const okbtn = document.getElementById('okbutton')
const copyalertcont = document.getElementById('copy-alert')

const WORD_LIST = wordArray()
const NUMBER_LIST = generateArray(48, 57)
const SYMBOL_LIST = generateArray(33, 47).concat(
                    generateArray(58, 64)).concat(
                    generateArray(91, 96)).concat(
                    generateArray(123, 126))


// Events
lengthEl.addEventListener('input', syncLength)
rangeEl.addEventListener('input', syncLength)

clipboard.addEventListener('click', () => {
    console.log('button pressed')
    const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	
	if(!password) { 
        return; 
    }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
    // alert("Password Copied!")
    copyalertcont.style.display = "block"
    gsap.to(".copy-alert", {opacity: 1, duration: .2});

    gsap.to(clipboard, {opacity: 0, duration: .2, onComplete: clipboardAway})
});

okbtn.addEventListener('click', () => {
    console.log('ok')
    resultEl.innerText = ''
    gsap.to(".copy-alert", {opacity: 0, duration: .2, onComplete: copyAlertAway});
});

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked; // Change to value.
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(length, hasUpper, hasNumber, hasSymbol)
    
    clipboard.style.display = "block"
    gsap.to(clipboard, {opacity: 1, duration: .1})
});

// Functions

function copyAlertAway() {
    copyalertcont.style.display = "none"
}

function clipboardAway() {
    clipboard.style.display = "none"
}

function syncLength(e) {
    const value = e.target.value
    lengthEl.value = value
    rangeEl.value = value
}

function generatePassword(length, uppercase, number, symbol) {
    let wordList = WORD_LIST
    let numberList = NUMBER_LIST
    let symbolList = SYMBOL_LIST
    const generatedPassword = []

    for (let i = 0; i < length; i++) {
        let wordChosen = wordList[Math.floor(Math.random() * wordList.length)]
        const diceDecision = diceRoll()
        if (uppercase) {
            if (diceDecision == 'yes') {
                const wordCapitalized = wordChosen.charAt(0).toUpperCase() + wordChosen.slice(1).toLocaleLowerCase()
                wordChosen = wordCapitalized
            }    
        }
        generatedPassword.push(String(wordChosen))
    }

    if (number) {
        let numberGenerated = ''
        for (let i = 0; i < 2; i++) {
            const numberChosen = numberList[Math.floor(Math.random() * numberList.length)]
            const numberCoded = String.fromCharCode(numberChosen)
            numberGenerated += numberCoded
        }
        generatedPassword.push(numberGenerated)
    }

    if (symbol) {
        for (let i = 0; i < 1; i++) {
            const symbolChosen = symbolList[Math.floor(Math.random() * symbolList.length)];
            const symbolCoded = String.fromCharCode(symbolChosen)
            generatedPassword.push(String(symbolCoded))
        }
    }

    shuffleArray(generatedPassword)
    return generatedPassword.join('')
}

function generateArray(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
  return array
}

function shuffleArray(array) {
    const shuffle = []

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        shuffle.push(temp)
    }

    return shuffle
}

function diceRoll() {
    const diceSix = ['yes', 'no', 'no', 'no', 'yes']
    const diceRoll = diceSix[Math.floor(Math.random() * diceSix.length)]
    return diceRoll
}