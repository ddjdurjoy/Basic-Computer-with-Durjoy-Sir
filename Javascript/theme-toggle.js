const themeToggle = document.getElementById("themeToggle");
const body = document.documentElement;

// Check localStorage for theme preference
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  body.setAttribute("data-theme", currentTheme);
}

themeToggle.addEventListener("click", () => {
  const isDark = body.getAttribute("data-theme") === "dark";
  body.setAttribute("data-theme", isDark ? "light" : "dark");
  localStorage.setItem("theme", isDark ? "light" : "dark");
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 20px from the top
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};