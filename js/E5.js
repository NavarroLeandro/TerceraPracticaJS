// 2- Definir una función que muestre información sobre una cadena de texto que se
// le pasa como argumento. A partir de la cadena que se le pasa, la función
// determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
// por una mezcla de ambas.

var cadenaDeCaracteres;

function analizarCadena(cadena) {
  if (cadena === cadena.toUpperCase()) {
    return document.write("La cadena está formada solo por mayúsculas.");
  } else if (cadena === cadena.toLowerCase()) {
    return document.write("La cadena está formada solo por minúsculas.");
  } else {
    return document.write("La cadena está formada por una mezcla de mayúsculas y minúsculas.");
  }
}

cadenaDeCaracteres = prompt(
  "Ingrese una frase u oracion en mayuscula o minuscula o como usted quiera: "
);

analizarCadena(cadenaDeCaracteres);
