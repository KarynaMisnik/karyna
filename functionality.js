/* navigation bar */

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

/* MAIN PAGE STARTS */
const character = document.getElementById("character");
const startButton = document.getElementById("start-btn");
const dialogue = document.getElementById("dialogue");

/*
startButton.addEventListener("mouseover", () => {
  character.style.backgroundImage = "url('character-wave.png')";
});

startButton.addEventListener("mouseleave", () => {
  character.style.backgroundImage = "url('character-idle.png')";
});
*/

startButton.addEventListener("click", () => {
  dialogue.style.display = "block";
  setTimeout(() => {
    window.location.href = "home.html"; // Change this to your actual page
  }, 2000); // Wait 2 seconds before redirecting
});
/* MAIN PAGE ENDS */

/* typing machine effect  check footer contact section*/

const textDisplay = document.getElementById("personal_email");
const phrases = ["Contact me karinamisnik94@gmail.com."];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;

      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 3500 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();
/* tipying effect end */

/* switches light/dark mode */

function swapStyleSheet(sheet) {
  document.getElementById("pagestyle").setAttribute("href", sheet);
}
