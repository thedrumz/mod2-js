const express = require("express");
const router = express.Router();
const studentsListA = require("./resources/students_A.js");
const studentsListB = require("./resources/students_B.js");
const Student = require("./models/Student");
const statistics = require("./controllers/statistics");

router.route(["/", "/students"]).get((req, res) => {
  const list = getAllStudents(req.query);

  res.send(list);
});

router.route(["/students/approved"]).get((req, res) => {
  const list = getAllStudents(req.query);

  res.send(statistics.approvedStudents(list));
});

router.route(["/students/failed"]).get((req, res) => {
  const list = getAllStudents(req.query);

  res.send(statistics.failedStudents(list));
});

router.route(["/students/best"]).get((req, res) => {
  const list = getAllStudents(req.query);

  res.send(statistics.bestStudents(list));
});

router.route(["/students/average"]).get((req, res) => {
  const list = getAllStudents(req.query);

  res.send(statistics.average(list).toString());
});

router.route(["/students"]).get((req, res) => {
  const list = getAllStudents(req.query);

  res.send(statistics.average(list).toString());
});

router.route(["/student/:dni"]).get((req, res) => {
  const dni = req.params.dni.trim().toUpperCase();
  const list = getAllStudents(req.query);

  const [student] = list.filter(student => student.dni === dni);

  res.send(student);
});

function getAllStudents(queryParams) {
  let studentsList = selectStudentsList(queryParams.classroom);

  if ("subject" in queryParams) {
    studentsList = statistics.studentsBySubject(
      studentsList,
      queryParams.subject
    );
  }

  return studentsList.map(student => {
    return new Student(student.name, student.dni, student.grades);
  });
}

function selectStudentsList(studentsClass) {
  if (studentsClass === undefined) {
    studentsClass = "A";
  }

  studentsClass = studentsClass.toUpperCase();

  if (studentsClass === "A") {
    return studentsListA;
  } else {
    return studentsListB;
  }
}

module.exports = router;
