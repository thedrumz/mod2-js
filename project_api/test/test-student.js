const assert = require("chai").assert;
const expect = require("chai").expect;
const Student = require("../models/Student");

const data = {
  name: "Mmmmmax Gómez Parada   ",
  dni: " 53115111s   ",
  grades: [
    {
      subject: "History",
      grade: 10
    },
    {
      subject: "Science",
      grade: 7
    },
    {
      subject: "Maths",
      grade: 5
    }
  ]
};

it("Format DNI", function(done) {
  const student = new Student(data.name, data.dni, data.grades);

  assert.equal("53115111S", student.dni);
  done();
});

it("Name format", function(done) {
  const student = new Student(data.name, data.dni, data.grades);

  assert.equal("Max", student._toNameFormat("  max "));
  done();
});

it("Format name part", function(done) {
  const student = new Student(data.name, data.dni, data.grades);

  assert.equal("Pedro", student._formatNamePart(" pPpPpedroooo  "));
  done();
});

it("Get name parts", function(done) {
  const student = new Student(data.name, data.dni, data.grades);

  assert.sameMembers(
    [
      "María Luísa de los Palotes",
      "Fernández",
      "Rodríguez",
      "María Luísa de los Palotes Fernández Rodríguez"
    ],
    student._getNameParts("María Luísa de los Palotes Fernández Rodríguez")
  );
  done();
});

it("Add grade", function(done) {
  const student = new Student(data.name, data.dni, data.grades);
  student.addGrade("  physics ", 3);

  assert.equal(4, student.grades.length);
  expect({ subject: "Physics", grade: 3 }).to.eqls(
    student.grades[student.grades.length - 1]
  );
  done();
});

it("Average calculation", function(done) {
  const student = new Student(data.name, data.dni, data.grades);

  assert.equal(7.33, student.average);

  student.addGrade("physics", 3);
  assert.equal(6.25, student.average);
  done();
});

it("Textual grade", function(done) {
  const student = new Student(data.name, data.dni, data.grades);

  assert.equal("NOTABLE", student.textualGrade);

  student.addGrade("physics", 3);
  assert.equal("APROBADO", student.textualGrade);
  done();
});
