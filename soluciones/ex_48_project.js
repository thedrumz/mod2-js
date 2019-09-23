/**
 * La aplicación debe escribir una ficha con el nombre completo
 * del estudiante, una línea de separación y a continuación la
 * nota media de dos exámenes
 *
 *       ************************************
 *       * <nombre> <apellido1> <apellido2> *
 *       *                                  *
 *       *               8.51               *
 *       *             (NOTABLE)            *
 *       ************************************
 *
 *  - ¿Y si en lugar de un estudiante hay un muchos?
 *
 * Completa la funcionalidad de la aplicación con las siguientes funcionalidades:
 *  - incluye el DNI en los datos del estudiante
 *  - la aplicación podrá manejar un número indefinido de estudiantes
 *  - la aplicación ofrecerá un mecanismo para crear estudiantes, inicialmente sin ninguna nota
 *  - no podrá haber estudiantes con DNI repetido
 *  - la aplicación ofrecerá un mecanismo para añadir una nota a un estudiante, identificándolo
 *    por su DNI
 *
 *
 */
const PASS_NOTE = 5;
const DECIMALS = 2;
const students = [];

function getTextualNote(media) {
  if (media >= 5 && media < 7) {
    return "(APROBADO)";
  } else if (media >= 7 && media < 9) {
    return "(NOTABLE)";
  } else if (media >= 9) {
    return "(SOBRESALIENTE)";
  } else {
    return "(SUSPENSO)";
  }
}

function printBox(width, full_name, media, passed) {
  const line_up_down = "*".repeat(width);
  const line_separator = " ".repeat(width);
  const lineWithTextCentered = (line_width, text) => {
    const text_count = text.toString().length;

    const line_middle_rigth = line_width / 2 - text_count / 2;
    let line_middle_left = line_middle_rigth;

    if (line_middle_rigth % 1 !== 0) {
      line_middle_left = line_middle_rigth + 1;
    }

    const line_prefix = " ".repeat(line_middle_left);
    const line_sufix = " ".repeat(line_middle_rigth);

    return line_prefix + text + line_sufix;
  };

  const line_media = lineWithTextCentered(width, media);

  const line_passed = lineWithTextCentered(width, passed);

  console.log(
    `
    **${line_up_down}**
    * ${full_name} *
    * ${line_separator} *
    * ${line_media} *
    * ${line_passed} *
    **${line_up_down}**
    `
  );
}

const printAllStudents = () => {
  students.map(student => {
    const full_name_count = student.full_name.length;
    let media = "";
    let passed = "";

    if (student.grades.length) {
      media = (
        student.grades.reduce((a, b) => a + b) / student.grades.length
      ).toFixed(DECIMALS);

      passed = getTextualNote(media);
    }

    printBox(full_name_count, student.full_name, media, passed);
  });
};

const formatNamePart = part => {
  let arr = part.split("");
  for (letter of arr) {
    const total = arr.length - 1;

    if (arr[total] === arr[total - 1]) {
      arr.pop();
    }
    if (arr[0] === arr[1]) {
      arr.shift();
    }
  }

  let result = arr.join("");

  return result.charAt(0).toUpperCase() + result.slice(1);
};

const getNameParts = full_name => {
  const arr = full_name
    .trim()
    .replace(/[\t\r\n\f\s]{1,}/g, " ")
    .split(" ");

  const apellido2 = formatNamePart(arr.pop());
  const apellido1 = formatNamePart(arr.pop().trim());
  const nombre = formatNamePart(arr.join(" ").trim());
  const nombre_completo = [nombre, apellido1, apellido2].join(" ");

  return [nombre, apellido1, apellido2, nombre_completo];
};

const setStudent = (full_name, dni) => {
  student = getStudentByDni(dni);

  if (student) {
    console.warn("Ya existe un estudiante con ese DNI, prueba con otro.");
    return false;
  }

  const [nombre, apellido1, apellido2, nombre_completo] = getNameParts(
    full_name
  );

  students.push({
    name: nombre,
    fisrt_surname: apellido1,
    second_surname: apellido2,
    full_name: nombre_completo,
    dni: formatDni(dni),
    grades: []
  });
};

const setGradeToStudentByDni = (dni, grade) => {
  student = getStudentByDni(dni);

  if (!student) {
    console.warn("No existe ese estudiante");
    return false;
  }

  student.grades.push(parseFloat(grade));
};

const getStudentByDni = dni => {
  if (!students.length) {
    return false;
  }

  dni = formatDni(dni);

  const byDni = student => student.dni == dni;

  const [student] = students.filter(byDni);

  if (student === []) {
    return false;
  }

  return student;
};

const formatDni = dni => dni.trim().toUpperCase();

const students_list = require("./resources/students.js");

const createStudent = student => {
  setStudent(student.name, student.dni);
  student.grades.map(grade => setGradesToStudent(student.dni, grade));
};
const setGradesToStudent = (dni, grade) => {
  setGradeToStudentByDni(dni, grade);
};
// students_list.map(createStudent);

createStudent(students_list[0]);

// setStudent("Max Gómez Parada", "53115111s");
// setGradeToStudentByDni("53115111s", 10);
// setGradeToStudentByDni("53115111s", 10);
// setGradeToStudentByDni("53115111s", 10);

// setStudent("María de los   Dolores Campos    Fernández   ", "45221589J");
// setGradeToStudentByDni("45221589j", 2);
// setGradeToStudentByDni("45221589j", 5);

printAllStudents();
