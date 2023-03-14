// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado
// por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
// solo los resultados del 1 al 10 del número elegido por el usuario.


// Pedimos al usuario que ingrese un número
var numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar del 1 al 10"));

// Definimos una función que recibe como argumento un número y muestra su tabla de multiplicar del 1 al 10
function tablaMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    document.write(numero + " x " + i + " = " + (numero*i));
    document.write("<br>")
  }
}

// Llamamos a la función y pasamos como argumento el número ingresado por el usuario
tablaMultiplicar(numero);
