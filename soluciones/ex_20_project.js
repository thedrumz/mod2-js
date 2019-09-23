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
 *  - NUEVO REQUISITO: usar let y const donde proceda
 *
 */
const PASS_NOTE = 5;
const DECIMALS = 2;

const nombre = "Max";
const apellido1 = "Gómez";
const apellido2 = "Parada";

const grades = [7.9, 9.9, 1, 7, 1, 1, 1];

const full_name = `${nombre} ${apellido1} ${apellido2}`;
const full_name_count = full_name.length;

const media = (grades.reduce((a, b) => a + b) / grades.length).toFixed(
  DECIMALS
);

const passed = media > PASS_NOTE ? "APROBADO" : "SUSPENSO";

const line_up_down = "*".repeat(full_name_count);
const line_separator = " ".repeat(full_name_count);

function lineWithTextCentered(line_width, text) {
  const text_count = text.toString().length;

  const line_middle = line_width / 2 - text_count / 2;

  const line_prefix = " ".repeat(
    line_middle % 1 !== 0 ? line_middle + 1 : line_middle
  );
  const line_sufix = " ".repeat(line_middle);

  return line_prefix + text + line_sufix;
}

const line_media = lineWithTextCentered(full_name_count, media);

const line_passed = lineWithTextCentered(full_name_count, passed);

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
