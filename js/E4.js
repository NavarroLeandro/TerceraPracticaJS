// 1- Escribir el código de una función a la que se pasa como parámetro un número
// entero y devuelve como resultado una cadena de texto que indica si el número es
// par o impar. Mostrar por pantalla el resultado devuelto por la función.

var numero1;

function numeroEntero(numero){
  if(numero%2==0){
    document.write("El numero es par.");
  }else{
    document.write("El numero es impar.");
  }
  return;
}

numero1=parseInt(prompt("Ingrese un numero cualquiera: "));

numeroEntero(numero1);