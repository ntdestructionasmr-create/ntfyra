// ---------- SAFETY: FORCE POPUP HIDDEN ON LOAD ----------
const popup = document.getElementById("premiumPopup");
popup.classList.add("hidden"); // HARD LOCK

// ---------- TAB SWITCH ----------
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

    tab.classList.add("active");
    const id = tab.dataset.tab;
    if (id) document.getElementById(id).classList.add("active");
  });
});

// ---------- USER DATA ----------
const weight = Number(localStorage.getItem("weight")) || 70;
const level = localStorage.getItem("level") || "beginner";
const place = localStorage.getItem("place") || "home";

// ---------- WORKOUT ----------
const workouts = {
  beginner: {
    home: ["Push-ups 3×15", "Squats 3×20", "Plank 60s"],
    gym: ["Bench Press 3×10", "Leg Press 3×12", "Lat Pulldown 3×10"]
  },
  advanced: {
    home: ["Pike Pushups 4×12", "Jump Squats 4×20", "Plank 90s"],
    gym: ["Bench Press 4×8", "Deadlift 4×6", "Pull-ups 4×10"]
  }
};

const workoutList = document.getElementById("workoutList");
if (workoutList) {
  workouts[level][place].forEach(w => {
    const li = document.createElement("li");
    li.textContent = w;
    workoutList.appendChild(li);
  });
}

// ---------- DIET ----------
const dietList = document.getElementById("dietList");
if (dietList) {
  [
    `Oats – ${weight} g`,
    `Eggs – ${Math.round(weight / 10)} eggs`,
    `Rice – ${weight * 2} g`,
    `Chicken – ${weight * 2.5} g`,
    `Vegetables – 100 g`
  ].forEach(d => {
    const li = document.createElement("li");
    li.textContent = d;
    dietList.appendChild(li);
  });
}

// ---------- PREMIUM POPUP (ONLY ON CLICK) ----------
document.querySelectorAll(".premium-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("hidden");
  });
});

// ---------- CLOSE POPUP ----------
document.getElementById("closePopup").addEventListener("click", () => {
  popup.classList.add("hidden");
});
.hidden {
  display: none !important;
}
