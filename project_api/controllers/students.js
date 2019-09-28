const studentsListA = require("../resources/students_A.js");
const studentsListB = require("../resources/students_B.js");
const Student = require("../models/Student");

const DEFAULT_CLASSROM = "A";

function studentsBySubject(students, subject) {
  subject = subject.trim().toUpperCase();

  const studentByGrade = grade => grade.subject.toUpperCase() === subject;

  return students.filter(student => student.grades.filter(studentByGrade).length > 0);
}

const getAllStudents = queryParams => {
  let studentsList = selectStudentsList(queryParams.classroom);

  if ("subject" in queryParams) {
    studentsList = studentsBySubject(
      studentsList,
      queryParams.subject
    );
  }

  return studentsList.map(
    student => new Student(student.name, student.dni, student.grades)
  );
};

const selectStudentsList = studentsClass => {
  if (studentsClass === undefined) {
    studentsClass = DEFAULT_CLASSROM;
  }

  studentsClass = studentsClass.toUpperCase();

  if (studentsClass === "A") {
    return studentsListA;
  } else {
    return studentsListB;
  }
};

const getSingleStudentByDni = (dni, queryParams) => {
  const [student] = getAllStudents(queryParams)
    .filter(student => student.dni === dni);

  return student;
};

module.exports = {
  getAllStudents,
  getSingleStudentByDni
};
