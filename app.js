// ===============================
// DIET PLAN WITH CALORIES (ALL)
// ===============================
const basicDietEl = document.getElementById("basicDiet");
const premiumDietEl = document.getElementById("premiumDiet");

basicDietEl.innerHTML = "";
premiumDietEl.innerHTML = "";

// BASIC DIET (CALORIES FOR ALL)
const basicDiet = [
  { meal: "Morning – Oats / Ragi / Idli", cal: 350 },
  { meal: "Midday – Fruits", cal: 150 },
  { meal: "Lunch – Rice + Dal / Chicken", cal: 600 },
  { meal: "Evening – Sprouts / Boiled Eggs", cal: 250 },
  { meal: "Dinner – Light Rice / Chapati + Vegetables", cal: 400 }
];

let totalCalories = 0;

basicDiet.forEach(item => {
  totalCalories += item.cal;
  const li = document.createElement("li");
  li.textContent = `${item.meal} — ${item.cal} kcal`;
  basicDietEl.appendChild(li);
});

// TOTAL CALORIES
const totalLi = document.createElement("li");
totalLi.style.fontWeight = "bold";
totalLi.textContent = `Total ≈ ${totalCalories} kcal`;
basicDietEl.appendChild(totalLi);

// PREMIUM EXTRA DETAILS
if (isPremium) {
  const weight = Number(localStorage.getItem("weight")) || 70;

  const premiumDiet = [
    `Morning – Oats ${weight} g + Eggs ${Math.round(weight / 10)} (~350 kcal)`,
    `Pre-Workout – Banana + Black Coffee (~120 kcal)`,
    `Lunch – Rice ${weight * 2} g + Chicken ${weight * 2.5} g (~650 kcal)`,
    `Post-Workout – Whey Protein (~120 kcal)`,
    `Dinner – Vegetables 100 g + Paneer / Eggs (~350 kcal)`
  ];

  premiumDiet.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    premiumDietEl.appendChild(li);
  });
} else {
  premiumDietEl.innerHTML =
    "<li>🔒 Exact grams, timings & protein breakdown (Premium only)</li>";
}
