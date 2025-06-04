function getGrades(inputSelector) {
  // get grades from the input box
  const grades = document.querySelector(inputSelector).value;
  // split them into an array (String.split(','))
  const gradesArray = grades.split(",");
  // clean up any extra spaces, and make the grades all uppercase. (Array.map())
  const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
  console.log(cleanGrades);
  // return grades
  return cleanGrades;
}

function lookupGrade(grade) {
  // converts the letter grade to it's GPA point value and returns it
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  } else if (grade === "C") {
    points = 2;
  } else if (grade === "D") {
    points = 1;
  }
  return points;
}

function calculateGpa(grades) {
  // convert the letter grades to gpa points, filter out invalid grades
  const gradePoints = grades
    .map((grade) => lookupGrade(grade))
    .filter((points) => points > 0);

  if (gradePoints.length === 0) return "No valid grades entered.";

  // calculates the GPA
  const gpa =
    gradePoints.reduce((total, num) => total + num, 0) / gradePoints.length;
  return gpa.toFixed(2);
}

function outputGpa(gpa, selector) {
  // takes a gpa value and displays it in the HTML in the element identified by the selector passed in
  const outputElement = document.querySelector(selector);
  outputElement.innerText = gpa;
}

function clickHandler() {
  // when the button in our html is clicked
  // get the grades entered into the input
  const grades = getGrades("#grades");
  // calculate the gpa from the grades entered
  const gpa = calculateGpa(grades);
  // display the gpa
  outputGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);