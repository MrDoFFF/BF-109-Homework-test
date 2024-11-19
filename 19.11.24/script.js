const studentForm = document.querySelector("#student-form");
const studentNameInput = document.querySelector("#student-name");
const studentScoreInput = document.querySelector("#student-score");
const studentList = document.querySelector("#student-list");
const calculateAverageButton = document.querySelector("#calculate-average");
const averageScoreDisplay = document.querySelector("#average-score");

const students = JSON.parse(localStorage.getItem("students")) || [] ;

function renderStudentList() {
    studentList.innerHTML = ""; 
    students.forEach(({ name, score }) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${name}: ${score}`;
        studentList.appendChild(listItem);
    });
}

function saveToLocalStorage() {
    localStorage.setItem("students", JSON.stringify(students));
}
renderStudentList();

studentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = studentNameInput.value.trim();
    const score = Number(studentScoreInput.value);

    if (name && !isNaN(score) && score >= 0) {
        students.push({ name, score });
        renderStudentList();
        saveToLocalStorage();

        studentNameInput.value = "";
        studentScoreInput.value = "";
    } else {
        alert("ededi daxil edin!");
    }
});

calculateAverageButton.addEventListener("click", () => {
    if (students.length === 0) {
        alert("Siyahi bosdur!");
        return;
    }

    const totalScore = students.reduce((sum, student) => sum + student.score, 0);
    const averageScore = (totalScore / students.length).toFixed(2);
    averageScoreDisplay.textContent = averageScore;
});