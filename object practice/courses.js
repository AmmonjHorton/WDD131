const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'},
    { sectionNum: 3, roomNum: 'STC 349', enrolled: 30, days: 'MWF', instructor: 'Ammon Horton'},
  ],
  enrollStudent: function (sectionNum) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
    }
  },
  dropStudent: function (sectionNum) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0 && this.sections[sectionIndex].enrolled > 0) {
      this.sections[sectionIndex].enrolled--;
      renderSections(this.sections);
    }
  }
}; // <-- close the object here

function setCourseInfo(course) {
  const courseName = document.querySelector("#courseName");
  const courseCode = document.querySelector("#courseCode");
  courseName.textContent = course.name;
  courseCode.textContent = course.code;
}

function sectionTemplate(section) {
  return `<tr>
    <td>${section.sectionNum}</td>  
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections").innerHTML = html.join("");
}

// Event listeners for buttons
document.getElementById("enrollStudent").addEventListener("click", function() {
  const sectionNum = parseInt(document.getElementById("sectionNumber").value, 10);
  if (!isNaN(sectionNum)) {
    aCourse.enrollStudent(sectionNum);
  }
});

document.getElementById("dropStudent").addEventListener("click", function() {
  const sectionNum = parseInt(document.getElementById("sectionNumber").value, 10);
  if (!isNaN(sectionNum)) {
    aCourse.dropStudent(sectionNum);
  }
});

// Initialize page
setCourseInfo(aCourse);
renderSections(aCourse.sections);