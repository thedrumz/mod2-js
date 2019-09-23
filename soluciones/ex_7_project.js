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
 *       ************************************
 *
 *  El objetivo del ejercicio es adquirir soltura con el manejo de cadenas
 *
 *  Notas:
 *    - probar si con distintos nombres y notas se mantiene uniforme
 *    - búsqueda en MDN funciones sobre cadenas
 *    - buscar en Internet cómo redondear un número entero
 *    - una aplicación deber ser generalizable
 *
 */

nombre = "Max";
apellido1 = "Gómez";
apellido2 = "Parada";

nota1 = "7.9";
nota2 = "9.111111";

full_name = `${nombre} ${apellido1} ${apellido2}`;
full_name_count = full_name.length;

media = ((parseFloat(nota1) + parseFloat(nota2)) / 2).toFixed(2);
media_count = media.toString().length;

line_up_down = "*".repeat(full_name_count);
line_separator = " ".repeat(full_name_count);

line_media_middle = full_name_count / 2 - media_count / 2;

line_media_prefix = " ".repeat(
  line_media_middle % 1 !== 0 ? line_media_middle + 1 : line_media_middle
);
line_media_sufix = " ".repeat(line_media_middle);

line_media = line_media_prefix + media + line_media_sufix;

console.log(
  `
  **${line_up_down}**
  * ${full_name} *
  * ${line_separator} *
  * ${line_media} *
  **${line_up_down}**
  `
);
