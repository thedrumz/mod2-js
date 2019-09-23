/**
 *  Agrupando variables: objetos
 *
 *    - Aplicación: contar cuántas letras hay en una cadena de texto
 *    - ¿Afecta la implementación realizada al tiempo de ejecución?
 */

var fs = require("fs");

const text = fs.readFileSync("./resources/el_quijote.txt", "utf8");

// const text = "en un lugar de la mancha de cuyo nombre no quiero acordarme";

let char_count = {};

for (char of text) {
  if (char in char_count) {
    char_count[char]++;
  } else {
    char_count[char] = 1;
  }
}

console.log(char_count);
const used = process.memoryUsage().heapUsed / (1024 * 1024);
console.log("memory usage: ", used);
