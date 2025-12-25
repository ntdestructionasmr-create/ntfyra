// Save user data from onboarding
function saveUserData() {
  const weight = document.getElementById("weight").value;
  const goal = document.getElementById("goal").value;

  localStorage.setItem("weight", weight);
  localStorage.setItem("goal", goal);
}
