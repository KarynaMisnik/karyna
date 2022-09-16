/* navigation bar */ 

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', ()=>{
document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
link.addEventListener('click', () => {
document.body.classList.remove('nav-open');
})  
})


/* typing machine effect  check footer contact section*/

const textDisplay = document.getElementById('personal_email')
const phrases = ['Contact me karinamisnik94@gmail.com & check my other work. Click on cv to download it']
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop() {
isEnd = false
textDisplay.innerHTML = currentPhrase.join('')

if (i < phrases.length) {

if (!isDeleting && j <= phrases[i].length) {
currentPhrase.push(phrases[i][j])
j++
textDisplay.innerHTML = currentPhrase.join('')
}

if (isDeleting && j <= phrases[i].length) {
currentPhrase.pop(phrases[i][j])
j--
textDisplay.innerHTML = currentPhrase.join('')
}

if (j == phrases[i].length) {
isEnd = true
isDeleting = true
}

if (isDeleting && j === 0) {
currentPhrase = []
isDeleting = false
i++

if (i === phrases.length) {
i = 0

}
}
}
const spedUp = Math.random() * (80 - 50) + 50
const normalSpeed = Math.random() * (300 - 200) + 200
const time = isEnd ? 3500 : isDeleting ? spedUp : normalSpeed
setTimeout(loop, time)
}

loop();
/* tipying effect end */

/* switches light/dark mode */

function swapStyleSheet(sheet) {
document.getElementById('pagestyle').setAttribute('href', sheet);
}