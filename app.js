// FORCE POPUP HIDDEN
const popup = document.getElementById("premiumPopup");
popup.classList.add("hidden");

// USER DATA
const weight = Number(localStorage.getItem("weight")) || 70;
const place = localStorage.getItem("place") || "home";
const isPremium = localStorage.getItem("premium") === "true";

// SHOW PREMIUM BADGE
if (isPremium) {
  document.getElementById("premiumBadge").classList.remove("hidden");
}

// TABS
document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    const id = tab.dataset.tab;
    if (id) document.getElementById(id).classList.add("active");
  };
});

// WEEKLY SPLITS
const basicWeeklySplit = [
  "Mon – Full Body",
  "Tue – Cardio + Abs",
  "Wed – Upper Body",
  "Thu – Lower Body",
  "Fri – Full Body",
  "Sat – Cardio",
  "Sun – Rest"
];

const premiumWeeklySplit = {
  gym: [
    "Mon – Chest (Equipment)",
    "Tue – Back (Equipment)",
    "Wed – Legs (Equipment)",
    "Thu – Shoulders",
    "Fri – Arms",
    "Sat – Abs + Cardio",
    "Sun – Rest"
  ],
  home: [
    "Mon – Push",
    "Tue – Pull",
    "Wed – Legs",
    "Thu – Core",
    "Fri – Upper Body",
    "Sat – HIIT",
    "Sun – Rest"
  ]
};

const weeklyEl = document.getElementById("weeklySplit");
weeklyEl.innerHTML = "";

if (!isPremium) {
  document.getElementById("workoutTitle").innerText =
    "Weekly Bodyweight Split";
  basicWeeklySplit.forEach(d => {
    const li = document.createElement("li");
    li.textContent = d;
    weeklyEl.appendChild(li);
  });
} else {
  document.getElementById("workoutTitle").innerText =
    "Weekly Equipment Split 💎";
  premiumWeeklySplit[place].forEach(d => {
    const li = document.createElement("li");
    li.textContent = d;
    weeklyEl.appendChild(li);
  });
}

// DAILY WORKOUT
const today = new Date().getDay();
const dailyEl = document.getElementById("dailyWorkout");
dailyEl.innerHTML = "";

const dailyBasic = [
  "Rest",
  "Full Body",
  "Cardio",
  "Upper Body",
  "Lower Body",
  "Full Body",
  "Cardio"
];

const dailyPremium = {
  gym: ["Rest","Chest","Back","Legs","Shoulders","Arms","Abs"],
  home:["Rest","Push","Pull","Legs","Core","Upper","HIIT"]
};

const li = document.createElement("li");
li.textContent = isPremium
  ? dailyPremium[place][today]
  : dailyBasic[today];
dailyEl.appendChild(li);

// DIET
const dietTitle = document.getElementById("dietTitle");
const dietList = document.getElementById("dietList");
dietList.innerHTML = "";

if (!isPremium) {
  dietTitle.innerText = "Basic Diet Plan";
  ["Oats","Eggs","Rice","Dal / Chicken","Vegetables","Fruits"]
    .forEach(i => {
      const li = document.createElement("li");
      li.textContent = i + " 🔒";
      dietList.appendChild(li);
    });
} else {
  dietTitle.innerText = "Smart Diet Plan (Grams)";
  [
    `Oats – ${weight} g`,
    `Eggs – ${Math.round(weight/10)} eggs`,
    `Rice – ${weight*2} g`,
    `Chicken – ${weight*2.5} g`,
    `Vegetables – 100 g`
  ].forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    dietList.appendChild(li);
  });
}

// PROGRESS GRAPH
const ctx = document.getElementById("weightChart");
let progress = JSON.parse(localStorage.getItem("progress")) || [];

function drawChart() {
  if (!ctx) return;
  const c = ctx.getContext("2d");
  c.clearRect(0,0,ctx.width,ctx.height);
  c.beginPath();
  c.strokeStyle = "#00ff88";
  progress.forEach((w,i)=>{
    const x = (i/(progress.length-1||1))*ctx.width;
    const y = ctx.height - w*2;
    i===0 ? c.moveTo(x,y) : c.lineTo(x,y);
  });
  c.stroke();
}
drawChart();

saveWeight.onclick = () => {
  const v = Number(newWeight.value);
  if (!v) return;
  progress.push(v);
  localStorage.setItem("progress",JSON.stringify(progress));
  drawChart();
};

// PREMIUM SIMULATE
unlockPremium.onclick = () => {
  localStorage.setItem("premium","true");
  location.reload();
};

// POPUP ONLY ON CLICK
document.querySelectorAll(".premium-btn").forEach(btn=>{
  btn.onclick = e => {
    e.preventDefault();
    popup.classList.remove("hidden");
  };
});
closePopup.onclick = () => popup.classList.add("hidden");
