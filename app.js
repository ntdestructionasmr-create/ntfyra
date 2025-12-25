// ---------- TAB SWITCH ----------
document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    const id = tab.dataset.tab;
    if (id) document.getElementById(id).classList.add("active");
  };
});

// ---------- USER DATA ----------
const place = localStorage.getItem("place") || "home";
const isPremium = localStorage.getItem("premium") === "true";
const weight = Number(localStorage.getItem("weight")) || 70;

// ---------- WEEKLY SPLIT (ALL USERS) ----------
const weeklySplitData = [
  "Monday – Full Body",
  "Tuesday – Cardio",
  "Wednesday – Upper Body",
  "Thursday – Lower Body",
  "Friday – Full Body",
  "Saturday – Cardio",
  "Sunday – Rest"
];

weeklySplitData.forEach(d => {
  const li = document.createElement("li");
  li.textContent = d;
  weeklySplit.appendChild(li);
});

// ---------- DAILY WORKOUT (ALL, PREMIUM EXTRA DETAILS) ----------
const dailyBasic = [
  "Sunday – Rest",
  "Monday – Full Body",
  "Tuesday – Cardio + Abs",
  "Wednesday – Upper Body",
  "Thursday – Lower Body",
  "Friday – Full Body",
  "Saturday – Cardio"
];

const dailyPremiumExtra = {
  gym: [
    "Sunday – Rest",
    "Chest – Machines (4×10)",
    "Back – Machines (4×10)",
    "Legs – Machines (4×12)",
    "Shoulders – Machines",
    "Arms – Machines",
    "Abs + Cardio"
  ],
  home: [
    "Sunday – Rest",
    "Push (4 exercises)",
    "Pull (4 exercises)",
    "Legs (4 exercises)",
    "Core",
    "Upper Body",
    "HIIT"
  ]
};

const today = new Date().getDay();
const li = document.createElement("li");
li.textContent = isPremium
  ? dailyPremiumExtra[place][today]
  : dailyBasic[today];
dailySplit.appendChild(li);

// ---------- DIET (ALL USERS WITH CALORIES) ----------
const basicDietData = [
  ["Morning – Oats / Idli", 350],
  ["Midday – Fruits", 150],
  ["Lunch – Rice + Dal / Chicken", 600],
  ["Evening – Eggs / Sprouts", 250],
  ["Dinner – Chapati + Veg", 400]
];

let total = 0;
basicDietData.forEach(d => {
  total += d[1];
  const li = document.createElement("li");
  li.textContent = `${d[0]} — ${d[1]} kcal`;
  basicDiet.appendChild(li);
});

const totalLi = document.createElement("li");
totalLi.style.fontWeight = "bold";
totalLi.textContent = `Total ≈ ${total} kcal`;
basicDiet.appendChild(totalLi);

// ---------- PREMIUM DIET EXTRA ----------
if (isPremium) {
  const premiumExtra = [
    `Oats ${weight}g`,
    "Pre-workout Banana",
    `Rice ${weight*2}g + Chicken ${weight*2.5}g`,
    "Post-workout Whey",
    "Dinner – Paneer / Eggs"
  ];
  premiumExtra.forEach(d => {
    const li = document.createElement("li");
    li.textContent = d;
    premiumDiet.appendChild(li);
  });
} else {
  premiumDiet.innerHTML = "<li>🔒 Exact grams & timings (Premium)</li>";
}

// ---------- POPUP ----------
premiumPopup.classList.add("hidden");
document.querySelectorAll(".premium-btn").forEach(b => {
  b.onclick = () => premiumPopup.classList.remove("hidden");
});
closePopup.onclick = () => premiumPopup.classList.add("hidden");

// ---------- SIMULATE PREMIUM ----------
unlockPremium.onclick = () => {
  localStorage.setItem("premium","true");
  location.reload();
};
