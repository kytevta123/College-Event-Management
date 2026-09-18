// Target date for the main event
const eventDate = new Date("October 15, 2026 09:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff > 0) {
    document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000);
  }
}, 1000);// Dark Mode Toggle
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.body.removeAttribute("data-theme");
    toggleBtn.innerText = "🌙 Dark Mode";
  } else {
    document.body.setAttribute("data-theme", "dark");
    toggleBtn.innerText = "☀️ Light Mode";
  }
});

// Event Filtering Logic
function filterEvents(category) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Form Submission Handling
function handleRegistration(event) {
  event.preventDefault();
  const successDiv = document.getElementById("formSuccess");
  successDiv.innerText = "🎉 Success! Registration completed successfully.";
  document.getElementById("eventForm").reset();
}