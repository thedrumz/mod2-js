function approvedStudents(students) {
  const approved = students.filter(student => student.average >= 5);

  return approved.map(
    student => `${student.fullName} (${student.textualGrade})`
  );
}

function failedStudents(students) {
  const failed = students.filter(student => student.average < 5);

  return failed.map(student => student.fullName);
}

function bestStudents(students) {
  const bestGrade = Math.max.apply(
    Math,
    students.map(student => student.average)
  );

  return students.filter(student => student.average == bestGrade);
}

function average(students) {
  const average = (
    students.map(student => parseInt(student.average)).reduce((a, b) => a + b) /
    students.length
  ).toFixed(2);

  return `Class average note is ${average}`;
}

function studentsBySubject(students, subject) {
  subject = subject.trim().toUpperCase();

  return students.filter(student => {
    if (
      student.grades.filter(grade => {
        return grade.subject.toUpperCase() === subject;
      }).length > 0
    ) {
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
