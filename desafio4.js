let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScrip','C','C++','Kotlin','Python'];
lenguagesDeProgramacion.push('Java','Ruby', 'GoLang');

function mostrarLenguajes() {
    console.log(lenguagesDeProgramacion);
}

mostrarLenguajes();

/*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso. */
function mostrarLenguajesInverso() {
    console.log(lenguagesDeProgramacion.reverse());
}

mostrarLenguajesInverso();


function calcularPromedio() {
    let suma = 0;
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
        suma += lenguagesDeProgramacion[i].length;
    }
    return suma / lenguagesDeProgramacion.length;
}

/*
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
*/

function mostrarMaximoMinimo() {
    let maximo = lenguagesDeProgramacion[0].length;
    let minimo = lenguagesDeProgramacion[0].length;
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
        if (lenguagesDeProgramacion[i].length > maximo) {
            maximo = lenguagesDeProgramacion[i].length;
        }
        if (lenguagesDeProgramacion[i].length < minimo) {
            minimo = lenguagesDeProgramacion[i].length;
        }
    }
    console.log(`El lenguaje con mayor longitud es ${lenguagesDeProgramacion[maximo]}, y el con menor es ${lenguagesDeProgramacion[minimo]}`);

}