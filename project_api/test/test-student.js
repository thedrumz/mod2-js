const assert = require("chai").assert;
const expect = require("chai").expect;
const Student = require("../models/Student");

const data = {
  name: "        Mmmmmaxxx Gómez Parada   ",
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

describe("Tests for Students class", () => {

  it("Format DNI", function () {
    const student = new Student(data.name, data.dni, data.grades);

    assert.equal("53115111S", student.dni);
  });

  it("Name format", function () {
    const student = new Student(data.name, data.dni, data.grades);

    assert.equal("Max", student.name);
  });

  it("Format name part", function () {
    const student = new Student(data.name, data.dni, data.grades);

    assert.equal("Max", student.name);
  });

  it("Full name correct format", function () {
    const student = new Student(data.name, data.dni, data.grades);

    assert.equal("Max Gómez Parada", student.fullName);
  });

  it("Add grade", function () {
    const student = new Student(data.name, data.dni, data.grades);
    student.addGrade("  physics ", 3);

    assert.equal(4, student.grades.length);
    expect({ subject: "Physics", grade: 3 }).to.eqls(
      student.grades[student.grades.length - 1]
    );
  });

  it("Average calculation", function () {
    const student = new Student(data.name, data.dni, data.grades);

    assert.equal(7.33, student.average);

    student.addGrade("physics", 3);
    assert.equal(6.25, student.average);
  });

  it("Textual grade", function () {
    const student = new Student(data.name, data.dni, data.grades);

    assert.equal("NOTABLE", student.textualGrade);

    student.addGrade("physics", 3);
    assert.equal("APROBADO", student.textualGrade);
  });
});