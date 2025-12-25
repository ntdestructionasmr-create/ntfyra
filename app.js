// TAB SWITCH
document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    const id = tab.dataset.tab;
    if (id) document.getElementById(id).classList.add("active");
  };
});

// USER DATA
const place = localStorage.getItem("place") || "home";
const isPremium = localStorage.getItem("premium") === "true";

// WEEKLY SPLIT (BASIC)
const weeklySplit = [
  "Monday – Full Body",
  "Tuesday – Cardio",
  "Wednesday – Upper Body",
  "Thursday – Lower Body",
  "Friday – Full Body",
  "Saturday – Cardio",
  "Sunday – Rest"
];

// DAILY SPLIT (PREMIUM)
const dailySplit = {
  gym: [
    "Monday – Chest Machines",
    "Tuesday – Back Machines",
    "Wednesday – Leg Machines",
    "Thursday – Shoulder Machines",
    "Friday – Arm Machines",
    "Saturday – Abs + Cardio",
    "Sunday – Rest"
  ],
  home: [
    "Push Day",
    "Pull Day",
    "Leg Day",
    "Core Day",
    "Upper Body",
    "HIIT",
    "Rest"
  ]
};

// RENDER WEEKLY (ALL USERS)
const weeklyEl = document.getElementById("weeklySplit");
weeklySplit.forEach(d => {
  const li = document.createElement("li");
  li.textContent = d;
  weeklyEl.appendChild(li);
});

// RENDER DAILY (ONLY PREMIUM)
const dailyEl = document.getElementById("dailySplit");
dailyEl.innerHTML = "";

if (isPremium) {
  dailySplit[place].forEach(d => {
    const li = document.createElement("li");
    li.textContent = d;
    dailyEl.appendChild(li);
  });
} else {
  dailyEl.innerHTML = "<li>🔒 Daily machine workouts (Premium only)</li>";
}

// POPUP CONTROL
const popup = document.getElementById("premiumPopup");
popup.classList.add("hidden");

document.querySelectorAll(".premium-btn").forEach(btn => {
  btn.onclick = () => popup.classList.remove("hidden");
});
closePopup.onclick = () => popup.classList.add("hidden");

// SIMULATE PREMIUM
unlockPremium.onclick = () => {
  localStorage.setItem("premium","true");
  location.reload();
};
