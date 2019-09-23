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
 *
 *  - NUEVO REQUISITO: Debajo debe aparecer, entre paréntesis, si ha aprobado o suspendido
 *
 *
 */
PASS_NOTE = 5;

nombre = "Max";
apellido1 = "Gómez";
apellido2 = "Parada";

nota1 = "7.9";
nota2 = "9.111111";

full_name = `${nombre} ${apellido1} ${apellido2}`;
full_name_count = full_name.length;

media = ((parseFloat(nota1) + parseFloat(nota2)) / 2).toFixed(2);

passed = media > PASS_NOTE ? "APROBADO" : "SUSPENSO";

line_up_down = "*".repeat(full_name_count);
line_separator = " ".repeat(full_name_count);

// Perdón por hacer una función pero tenía que duplicar
// el código y me sangraban los ojos...
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
