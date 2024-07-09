/*
Crea una función que calcule el índice de masa corporal (IMC) de una persona
a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
*/
function calcularIMC(altura, peso) {
    return (peso / (altura * altura));
}

/*
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
*/
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
}
    // Ejemplo de uso
    let numero = 5;
    let resultado = calcularFactorial(numero);
    console.log(`El factorial de ${numero} es ${resultado}`);

/*
Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva
el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor
del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80
*/
function convertirDolar(valor){
    let contizacionDolar = 4.80;
    return valor * contizacionDolar;
}

/*
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
utilizando la altura y la anchura que se proporcionarán como parámetros.
*/
function areaPerimetro(altura, anchura){
    let area = altura * anchura;
    let perimetro = (altura * 2) + (anchura * 2);
    return [area, perimetro];
}

/*
Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
*/
function areaPerimetroCircular(radio){
    var pi = 3.1416;
    let area = pi * (radio**2);
    let perimetro = 2 * pi * radio;
    return [area, perimetro];
}

/*
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/
function tablaMultiplicar ( numero ){
    for (let i = 0; i <= 10; i++) {
        console.log( i + " x " + numero + " = " + (i*numero));
    }
}