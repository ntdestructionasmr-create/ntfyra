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
const weight = Number(localStorage.getItem("weight")) || 70;

// WEEKLY SPLIT (ALL)
const weeklySplit = [
  "Monday – Full Body",
  "Tuesday – Cardio",
  "Wednesday – Upper Body",
  "Thursday – Lower Body",
  "Friday – Full Body",
  "Saturday – Cardio",
  "Sunday – Rest"
];

weeklySplit.forEach(d => {
  const li = document.createElement("li");
  li.textContent = d;
  weeklySplit.appendChild(li);
});

// DAILY SPLIT (PREMIUM)
const dailySplit = {
  gym: [
    "Chest Machines",
    "Back Machines",
    "Leg Machines",
    "Shoulder Machines",
    "Arm Machines",
    "Abs + Cardio",
    "Rest"
  ],
  home: [
    "Push",
    "Pull",
    "Legs",
    "Core",
    "Upper",
    "HIIT",
    "Rest"
  ]
};

if (isPremium) {
  dailySplit[place].forEach(d => {
    const li = document.createElement("li");
    li.textContent = d;
    dailySplitEl.appendChild(li);
  });
} else {
  dailySplitEl.innerHTML = "<li>🔒 Daily machine workouts (Premium only)</li>";
}

// DIET WITH CALORIES (ALL)
const basicDiet = [
  ["Morning – Oats / Idli", 350],
  ["Midday – Fruits", 150],
  ["Lunch – Rice + Dal / Chicken", 600],
  ["Evening – Eggs / Sprouts", 250],
  ["Dinner – Chapati + Veg", 400]
];

let total = 0;
basicDiet.forEach(d => {
  total += d[1];
  const li = document.createElement("li");
  li.textContent = `${d[0]} — ${d[1]} kcal`;
  basicDietEl.appendChild(li);
});

const totalLi = document.createElement("li");
totalLi.style.fontWeight = "bold";
totalLi.textContent = `Total ≈ ${total} kcal`;
basicDietEl.appendChild(totalLi);

// PREMIUM DIET
if (isPremium) {
  const premiumDiet = [
    `Oats ${weight}g + Eggs ${Math.round(weight/10)}`,
    "Pre-workout Banana",
    `Rice ${weight*2}g + Chicken ${weight*2.5}g`,
    "Post-workout Whey",
    "Vegetables + Paneer"
  ];

  premiumDiet.forEach(d => {
    const li = document.createElement("li");
    li.textContent = d;
    premiumDietEl.appendChild(li);
  });
} else {
  premiumDietEl.innerHTML = "<li>🔒 Grams & timings (Premium only)</li>";
}

// POPUP CONTROL
premiumPopup.classList.add("hidden");

document.querySelectorAll(".premium-btn").forEach(b => {
  b.onclick = () => premiumPopup.classList.remove("hidden");
});

closePopup.onclick = () => premiumPopup.classList.add("hidden");

// SIMULATE PREMIUM
unlockPremium.onclick = () => {
  localStorage.setItem("premium","true");
  location.reload();
};
