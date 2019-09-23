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
 *  - NUEVO REQUISITO: en lugar de indicar si la o el estudiante está
 *    aprobado o suspenso, indicad su nota textual
 *
 *  - ¿Qué más código se puede encapsular en funciones? (notar
 *    cómo se eliminan variables que solo se utilizan para los
 *    cálculos que ahora son internos de la función). Separar
 *    el código de presentación de la lógica.
 *
 */
const PASS_NOTE = 5;
const DECIMALS = 2;

function getTextualNote(media) {
  switch (media) {
    case media >= 5 && media < 7:
      return "APROBADO";
    case media >= 7 && media < 9:
      return "NOTABLE";
    case media >= 9:
      return "SOBRESALIENTE";
    default:
      return "SUSPENSO";
  }
}

function printBox(width, full_name, media, passed) {
  const line_up_down = "*".repeat(width);
  const line_separator = " ".repeat(width);
  const lineWithTextCentered = (line_width, text) => {
    const text_count = text.toString().length;

    const line_middle = line_width / 2 - text_count / 2;

    const line_prefix = " ".repeat(
      line_middle % 1 !== 0 ? line_middle + 1 : line_middle
    );
    const line_sufix = " ".repeat(line_middle);

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

const nombre = "Max";
const apellido1 = "Gómez";
const apellido2 = "Parada";

const grades = [7.9, 9.9, 1, 7, 1, 1, 1];

const full_name = `${nombre} ${apellido1} ${apellido2}`;
const full_name_count = full_name.length;

const media = (grades.reduce((a, b) => a + b) / grades.length).toFixed(
  DECIMALS
);

const passed = getTextualNote(media);

printBox(full_name_count, full_name, media, passed);
