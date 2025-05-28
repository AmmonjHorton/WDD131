//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML =  stepsHtml.join("");

const grades = ["A", "B", "A", "C", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  }
  else if (grade === "B") {
    points = 3;
  } else if (grade === "C") {
    points = 2;
  } else if (grade === "D") {
    points = 1;
  } else if (grade === "F") {
    points = 0;
  } 
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
console.log(gpaPoints);

