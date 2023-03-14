// 2- Crear un script que solicite al usuario mediante un prompt el nombre de
// ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
// debe mostrar el arreglo generado, luego realizar las siguientes acciones:
// ● Mostrar la longitud del arreglo.
// ● Mostrar en el documento web los ítems de las posiciones primera, tercera y
// última.
// ● Añade en última posición la ciudad de París.
// ● Escribe por pantalla el elemento que ocupa la segunda posición.
// ● Sustituye el elemento que ocupa la segunda posición por la ciudad de
// 'Barcelona'.


var ciudades = [];


while (true) {
  var ciudad = prompt("Ingresa el nombre de una ciudad:");
  if (ciudad == null) {
    break;
  }
  ciudades.push(ciudad);
}

document.write("el arreglo al comiendo es: ", ciudades);
document.write("<br>")

document.write("La longitud del arreglo es: " + ciudades.length);
document.write("<br>")


document.write("Los ítems en las posiciones primera, tercera y última son: " + ciudades[0] + ", " + ciudades[2] + ", " + ciudades[ciudades.length-1]);
document.write("<br>")


ciudades.push("París");


document.write("El elemento en la segunda posición es: " + ciudades[1]);
document.write("<br>")


ciudades[1] = "Barcelona";


document.write("El arreglo final es: " + ciudades);
document.write("<br>")