const studentsListA = require("../resources/students_A.js");
const studentsListB = require("../resources/students_B.js");
const Student = require("../models/Student");

const getAllStudents = queryParams => {
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
};

const selectStudentsList = studentsClass => {
  if (studentsClass === undefined) {
    studentsClass = "A";
  }

  studentsClass = studentsClass.toUpperCase();

  if (studentsClass === "A") {
    return studentsListA;
  } else {
    return studentsListB;
  }
};

const getSingleStudentByDni = (dni, queryParams) => {
  const students = getAllStudents(queryParams);

  const [student] = students.filter(student => student.dni === dni);

  return student;
};

module.exports = {
  getAllStudents,
  getSingleStudentByDni
};
