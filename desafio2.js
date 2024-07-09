function holaMundo(){
    return console.log('¡Hola, mundo!')
}

function holaMundo2(nombre){
    return console.log(`¡Hola, ${nombre}!`);
}
holaMundo2('Ruby');

function numeroDobles(numero){
    return numero * 2;
}

function promedio(numero1, numero2, numero3){
    return (numero1 + numero2 + numero3) / 3;
}

function numeroMayor(numero1, numero2){
    if(numero1 > numero2){
        return numero1;
    }else{
        return numero2;
    }
}

function multiplicarPorSiMismo(numero){
    return numero * numero;
}



