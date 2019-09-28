function approvedStudents(students) {
  return students.filter(student => student.average >= 5);
}

function failedStudents(students) {
  return students.filter(student => student.average < 5);
}

function bestStudents(students) {
  const averages = students.map(student => student.average);
  const bestGrade = Math.max(...averages);

  return students.filter(student => student.average == bestGrade);
}

function average(students) {
  const average = students
    .map(student => parseInt(student.average))
    .reduce((a, b) => a + b) / students.length;

  return average;
}

module.exports = {
  approvedStudents,
  failedStudents,
  bestStudents,
  average
};
