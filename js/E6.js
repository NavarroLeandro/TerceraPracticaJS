// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// ● La fórmula del perímetro es p = 2*(a +b)

function calcularPerimetro(a, b) {
  let perimetro = 2 * (a + b);
  return perimetro;
}

let ladoA = parseFloat(prompt("Ingrese el valor del lado A del rectángulo: "));
let ladoB = parseFloat(prompt("Ingrese el valor del lado B del rectángulo: "));

let resultado = calcularPerimetro(ladoA, ladoB);

document.write("El perímetro del rectángulo es: " + resultado);
