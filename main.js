/* MAIN PAGE STARTS */
const character = document.getElementById("character");
const startButton = document.getElementById("start-btn");
const dialogue = document.getElementById("dialogue");

character.addEventListener("mouseover", () => {
  character.style.animation = "animate-wave 0.5s steps(4) infinite"; // Play waving animation
});

character.addEventListener("mouseleave", () => {
  character.style.animation = "animate-idle 1.5s steps(4) infinite"; // Back to idle breathing
});

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
