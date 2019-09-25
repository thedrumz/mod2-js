function approvedStudents(students) {
  const approved = students.filter(student => student.average >= 5);

  return approved;
}

function failedStudents(students) {
  const failed = students.filter(student => student.average < 5);

  return failed;
}

function bestStudents(students) {
  const averages = students.map(student => student.average);
  const bestGrade = Math.max(...averages);

  return students.filter(student => student.average == bestGrade);
}

function average(students) {
  const average = (
    students.map(student => parseInt(student.average)).reduce((a, b) => a + b) /
    students.length
  ).toFixed(2);

  return average;
}

function studentsBySubject(students, subject) {
  subject = subject.trim().toUpperCase();

  const studentByGrade = grade => {
    grade.subject.toUpperCase() === subject;
  };

  return students.filter(student => {
    if (student.grades.filter(studentByGrade).length > 0) {
      return student;
    }
  });
}

module.exports = {
  approvedStudents,
  failedStudents,
  bestStudents,
  average,
  studentsBySubject
};
