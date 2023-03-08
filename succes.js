const urlParams = new URLSearchParams(window.location.search);
const points = urlParams.get("points");
console.log(points);
const point = (document.getElementById("point").textContent = points);
document.getElementById("tryagain").onclick = () => {
  location.href = "test.html";
};
const possiblepoints = localStorage.getItem("points");
console.log(possiblepoints);
let possible = document.getElementById("possiblepoints");
possible.textContent = possiblepoints;
