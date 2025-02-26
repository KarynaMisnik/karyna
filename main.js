/* MAIN PAGE STARTS */
document.getElementById("start-btn").addEventListener("click", () => {
  dialogue.style.display = "block";

  setTimeout(() => {
    window.location.href = "loading.html"; // Redirects to the loading page
  }, 2000); // Wait 2 seconds before redirecting
});
/* MAIN PAGE ENDS */

/* LOADING PAGE STARTS */
window.addEventListener("load", function () {
  document.getElementById("loading-screen").style.display = "block"; // Show loading screen

  // Animate the loading bar
  setTimeout(() => {
    document.querySelector(".bar-fill").style.width = "100%";
  }, 100);

  // Redirect after loading completes
  setTimeout(() => {
    window.location.href = "home.html"; // Final destination after loading
  }, 3000);
});

/* LOADING PAGE ENDS */
