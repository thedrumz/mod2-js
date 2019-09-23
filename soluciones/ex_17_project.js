/**
 * La aplicación debe escribir una ficha con el nombre completo
 * del estudiante, una línea de separación y a continuación la
 * nota media de dos exámenes
 *
 *
 *       ************************************
 *       * <nombre> <apellido1> <apellido2> *
 *       *                                  *
 *       *               8.51               *
 *       *            (APROBADO)            *
 *       ************************************
 *
 *  - NUEVO REQUISITO: Se tendrá un número indefinido de notas
 *
 */
PASS_NOTE = 5;

nombre = "Max";
apellido1 = "Gómez";
apellido2 = "Parada";

grades = [7.9, 9.9, 1, 7, 1, 1, 1];

full_name = `${nombre} ${apellido1} ${apellido2}`;
full_name_count = full_name.length;

media = (grades.reduce((a, b) => a + b) / grades.length).toFixed(2);

passed = media > PASS_NOTE ? "APROBADO" : "SUSPENSO";

line_up_down = "*".repeat(full_name_count);
line_separator = " ".repeat(full_name_count);

function lineWithTextCentered(line_width, text) {
  const text_count = text.toString().length;

  const line_middle = line_width / 2 - text_count / 2;

  const line_prefix = " ".repeat(
    line_middle % 1 !== 0 ? line_middle + 1 : line_middle
  );
  const line_sufix = " ".repeat(line_middle);

  return line_prefix + text + line_sufix;
}

line_media = lineWithTextCentered(full_name_count, media);

line_passed = lineWithTextCentered(full_name_count, passed);

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
