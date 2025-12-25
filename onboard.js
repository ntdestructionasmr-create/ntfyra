// TAB SWITCHING
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

    tab.classList.add("active");

    const id = tab.dataset.tab;
    if (id) document.getElementById(id).classList.add("active");
  });
});

// PREMIUM POPUP (ONLY ON CLICK)
const popup = document.getElementById("premiumPopup");
const closePopup = document.getElementById("closePopup");

document.querySelectorAll(".premium-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    popup.classList.remove("hidden");
  });
});

closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});
