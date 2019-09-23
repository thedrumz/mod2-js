const DECIMALS = 2;

module.exports = class Student {
  constructor(fullName, dni, grades = []) {
    this._grades = [];

    this.fullName = fullName;
    this.dni = dni;
    this.grades = grades;
  }

  get average() {
    if (!this._grades.length) {
      return 0;
    }

    return (
      this._grades.map(grade => grade.grade).reduce((a, b) => a + b) /
      this._grades.length
    ).toFixed(DECIMALS);
  }

  get textualGrade() {
    const average = this.average;

    if (average >= 5 && average < 7) {
      return "APROBADO";
    } else if (average >= 7 && average < 9) {
      return "NOTABLE";
    } else if (average >= 9) {
      return "SOBRESALIENTE";
    } else {
      return "SUSPENSO";
    }
  }

  get fullName() {
    return this._fullName;
  }

  get dni() {
    return this._dni;
  }

  get grades() {
    return this._grades;
  }

  set fullName(fullName) {
    const [name, surname1, surname2, formatedFullName] = this._getNameParts(
      fullName
    );
    this._name = name;
    this._surname1 = surname1;
    this._surname2 = surname2;
    this._fullName = formatedFullName;
  }

  set dni(dni) {
    this._dni = dni.trim().toUpperCase();
  }

  set grades(grades) {
    if (!grades.length) {
      return [];
    }

    grades.map(grade => {
      if ("subject" in grade && "grade" in grade) {
        return this.addGrade(grade.subject, grade.grade);
      }
    });
  }

  addGrade(subject, grade) {
    subject = this._toNameFormat(subject);

    this._grades.push({ subject, grade });
  }

  _formatNamePart(part) {
    let arr = part.trim().split("");
    for (let letter of arr) {
      const total = arr.length - 1;

      if (arr[total].toUpperCase() === arr[total - 1].toUpperCase()) {
        arr.pop();
      }
      if (arr[0].toUpperCase() === arr[1].toUpperCase()) {
        arr.shift();
      }
    }

    let result = arr.join("");

    return this._toNameFormat(result);
  }

  _getNameParts(full_name) {
    const arr = full_name
      .trim()
      .replace(/[\t\r\n\f\s]{1,}/g, " ")
      .split(" ");

    const apellido2 = this._formatNamePart(arr.pop());
    const apellido1 = this._formatNamePart(arr.pop().trim());
    const nombre = this._formatNamePart(arr.join(" ").trim());
    const nombre_completo = [nombre, apellido1, apellido2].join(" ");

    return [nombre, apellido1, apellido2, nombre_completo];
  }

  _toNameFormat(string) {
    string = string.trim();
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};
