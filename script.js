function startApp() {
  document.getElementById("onboarding").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
}

function openTab(id) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));

  document.getElementById(id).classList.add("active");
  event.target.classList.add("active");
}

function openPremium() {
  document.getElementById("premiumModal").classList.remove("hidden");
}

function closePremium() {
  document.getElementById("premiumModal").classList.add("hidden");
}
