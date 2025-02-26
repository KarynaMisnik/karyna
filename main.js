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

/*LOADING PAGE STARTS */
document.getElementById("start-btn").addEventListener("click", function () {
  document.getElementById("loading-screen").style.display = "block"; // Show loading screen

  // Animate the loading bar
  setTimeout(() => {
    document.querySelector(".bar-fill").style.width = "100%";
  }, 100);

  // Redirect after loading completes
  setTimeout(() => {
    window.location.href = "next-page.html"; // Change to your actual page
  }, 3000);
});

/*LOADING PAGE ENDS */
