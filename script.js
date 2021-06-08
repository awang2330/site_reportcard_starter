/*
COMPLETE THE FOLLOWING TASKS WITHOUT MODIFYING ANY OF THE CODE IN THE HTML OR CSS FILE.

You should only write code in the JavaScript functions below, as well as the object with your student information.

Each function is annotated with a comment explaining what it should do.

By the end of the lab, there shouldn't be any question marks left on the report card.
*/

const studentInformation = {
  name: "Ann Wang",
  grade: "Junior",
  advisor: "Varun Patel",
  major: "Computer Science",
  graduationYear: "2023",
  imageUrl: "smiley.png",
}

let semester = "Spring Semester"

const studentData = {
  "Spring Semester": [
    { code: "LIT 101", name: "English Literature 101", semester: "Spring 2021", credits: 5, grade: "B+" },
    { code: "CS 50", name: "Intro to Computer Science", semester: "Spring 2021", credits: 5, grade: "A-" },
    { code: "WD 140", name: "Modern Web Development", semester: "Spring 2021", credits: 5, grade: "A+" },
    { code: "JS 2.0", name: "Serverside JavaScript", semester: "Spring 2021", credits: 10, grade: "A-" },
  ],
  "Fall Semester": [
    { code: "Math 600", name: "Differential Equations", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "CS 10", name: "Python Programming", semester: "Fall 2020", credits: 5, grade: "A" },
    { code: "History 99", name: "History of Computers", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "MD 00", name: "Meditation and Mindfullness", semester: "Fall 2020", credits: 5, grade: "A+" },
  ],
  "Winter Term": [
    { code: "PHYS ED", name: "Physical Activity", semester: "Winter 2020", credits: 5, grade: "A-" },
    { code: "GEN ED", name: "General Education Requirement", semester: "Winter 2020", credits: 5, grade: "A+" },
  ],
}

const gpaPointsLookup = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0.0,
}

/**
 * QUERY SELECTORS VARIABLES GO HERE
 */
const dropdown = document.querySelector(".dropdown")
const reportCardTable = document.querySelector('#report-card-table');
const dropdownMenu= document.querySelector('.dropdown-menu')

const fallSem = document.querySelector('#fall-semester')
const springSem = document.querySelector('#spring-semester')
const winterTerm = document.querySelector('#winter-term')

// ADD more query selectors here

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String} studentName - the name of the student
 */
function updateStudentName(studentName) {
  document.getElementById('student-name').innerHTML = studentName;
}

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String|Number} studentGradeLevel - the grade level of the student
 */
function updateStudentGradeLevel(studentGradeLevel) {
  document.querySelector('#student-grade-level').innerHTML = studentGradeLevel;
}

/**
 * Modify the report card to display the correct advisor from the lookup table above.
 *
 * @param {String} studentAdvisor - the advisor of the student
 */
function updateStudentAdvisor(studentAdvisor) {
  document.getElementById('student-advisor').innerHTML = studentAdvisor;
}

/**
 * Modify the report card to display the correct major from the lookup table above.
 *
 * @param {String} studentMajor - the major of the student
 */
function updateMajor(studentMajor) {
  document.getElementById('student-major').innerHTML = studentMajor;
}

/**
 * Modify the report card to display the correct graduation year from the lookup table above
 *
 * @param {Number} graduationyear - the year the student graduates
 */
function updateStudentGraduationYear(graduationyear) {
  document.getElementById('student-graduation-year').innerHTML = graduationyear;
}

/**
 * Modify the img element using `setAttribute` so that that the src attribute
 * stores the link to your image.
 *
 * @param {String} url - a link to an image
 */
function updateStudentImage(imageUrl) {
  document.getElementById('student-image').src = imageUrl;
}

/**
 * This function should run as soon as the page loads and update the correct student info
 */
function populateStudentInfo({ name, grade, advisor, major, graduationYear, imageUrl }) {
  updateStudentName(name)
  updateStudentGradeLevel(grade)
  updateStudentAdvisor(advisor)
  updateMajor(major)
  updateStudentGraduationYear(graduationYear)
  updateStudentImage(imageUrl)
}

/**
 * This function should add a headers row to the report card table
 */
function addReportCardHeaders() {
  // update the code here
  reportCardTable.innerHTML += `
  <div class="table-header table-row">
    <h4>Code</h4>
    <h4>Name</h4>
    <h4>Semester</h4>
    <h4>Credits</h4>
    <h4>Letter</h4>
  </div> 
  `
}

/**
 * This function should take in a single course and create a row with the
 * course code, course name, course semester, course credits, course letter grade, and course points columns.
 *
 * @param {Object} course
 * @param {Number} rowNum
 */
function addCourseRowToReportCard(course, rowNum) {
  // update the code here with information about the course passed to this function
  reportCardTable.innerHTML += `
    <div class="table-row">
      <h4 class="code-col">${course.code}</h4>
      <h4 class="name-col">${course.name}</h4>
      <h4 class="sen-col">${course.semester}</h4>
      <h4 class="credits-col">${course.credits}</h4>
      <h4 class="letter-col">${course.grade}</h4>
    </div>
  `
}


/**
 * This is the primary function used to update the report card when the semester changes.
 * It should call the other functions responsible for creating the necessary HTML
 */
function updateReportCard() {
  updateDropdownLabel()

  reportCardTable.innerHTML = ``
  // add your code here

  addReportCardHeaders()

  // addCourseRowToReportCard(studentData[semester][0], semester)

  let totalCredits = 0
  let totalPoints = 0

  studentData[semester].forEach(element => {
    addCourseRowToReportCard(element, semester)
    totalCredits += element.credits

    // total points is grade multiplied by credits of that course
    totalPoints += (gpaPointsLookup[element.grade] * element.credits)
  });

  reportCardTable.innerHTML += `
  <div class="table-row">
    <h4>Total Credits: ${totalCredits}</h4>
    <h4>Total Points: ${totalPoints}</h4>
    <h4>GPA: ${totalPoints/totalCredits}</h4>
  </div>
  `

}

/**
 * This function should toggle the dropdown.
 *
 * If the dropdown classList contains the "closed" class, it should remove it.
 * If the dropdown classList doesn't contain the "closed" class, it should add it.
 */
function toggleDropdown() {
  // code goes here
  // if (dropdown.classList.contains('closed')) {
  //   dropdown.classList.remove('closed')
  // }
  // else {
  //   dropdown.classList.add('closed')
  // }

  dropdown.classList.toggle('closed')
}

/**
 * This function should update the inner html of the dropdown label to be the current
 * value stored in the `semester` variable.
 */
function updateDropdownLabel() {
  // code goes here
  document.querySelector('.dropdown-label').innerHTML = semester
}

// Add an event listener for the dropdown button that calls the toggleDropdown button
dropdown.addEventListener('click', () => {
  toggleDropdown()
})
// Add 3 event listeners - one for the fall semester option, the spring semester option, and the winter term option
// Each callback function one should update the `semester` variable,
// call the `updateReportCard` function and toggle the dropdown


fallSem.addEventListener('click', () => {
  semester = 'Fall Semester'
  updateReportCard()
})

springSem.addEventListener('click', () => {
  semester = 'Spring Semester'
  updateReportCard()
})

winterTerm.addEventListener('click', () => {
  semester = 'Winter Term'
  updateReportCard()
})


/*
* Add functions here to make it execute as soon as the page loads
*/
window.onload = function () {
  // run your function here to make it execute as soon as the page loads
  populateStudentInfo(studentInformation);
  updateReportCard();
}
