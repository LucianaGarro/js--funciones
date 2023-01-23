/*FUNCIONES*/
//¿Qué son las funciones y para qué las vamos a utilizar?
//Es un conjunto de instrucciones que se agrupan para una TAREA CONCRETA
//¿Cómo vamos a trabajar con estas con funciones?

//1) Declarar función:
//Ejemplo: quiero hacer una función que se llame "Hola Mundo" y que su tarea concreta sea la de generar un alert que me diga hola mundo. 

// function holaMundo(){
//     //acá colocamos las líneas de código que yo quiero que se ejecuten cada vez que yo llamo a esta función
//     alert("Hola Mundo");
// }

// //2) Llamar a la función (Invocar) ¿cómo?:  la voy a llamar por su nombre

// holaMundo();

//Tenemos funciones que ejecutan una acción
//Tenemos otras funciones que además retornan un dato.

function retornarNum3(){
    return 3;
}

let numTres = retornarNum3();
console.log(numTres);

//Función que sume:
//parámetros: son variables/datos que se declaran entre los parentesis. Son los datos que necesito para poder ejecutar la función

// function sumar(valorA,valorB){
//     let resultado = valorA + valorB;
//     return resultado;
// }

// let numeroUno= 200;
// let numeroDos=300;

// let resultadoSuma = sumar (numeroUno,numeroDos);
// console.log(resultadoSuma);

// function sumar (valorA,valorB){
//     let resultado = valorA + valorB;
//     return resultado;
// }
// let resultadoSuma = sumar (400,200);
// console.log(resultadoSuma);

// function sumar (valorA, valorB){
//     return valorA + valorB;
// }
// let resultadoSuma = sumar(5,25);
// console.log(resultadoSuma);

function sumar (valorA, valorB){
    return valorA + valorB;
}
console.log(sumar(10,70));

/// SCOPE o Alcances de las variables ///
///el scope o ámbito de una variable es la zona del programa en la cual se define el CONTEXTO al que pertene (la variable) dentro del algoritmo.
//JS tiene dos ámbitos para las variables: locales y globales. 

//Ejemplo variable Global

let global = 10;

function ejemploA(){
    console.log(global);
}
ejemploA();

//Ejemplo variable locales

function ejemploB(){
    let resultadoEjemploB = 10 + 10;
    console.log(resultadoEjemploB);
}
ejemploB();

//**FUNCIÓN ANÓNIMA */
// ES UNA FUNCIÓN QUE SE DEFINE SIN NOMBRE Y QUE SE UTILIZA PARA SER PASADA POR PARÁMETRO O ASIGNADA A UNA VARIABLE
//CREAR UNA FUNCIÓN ANÓNIMA QUE ME SUME DOS N° Y ASOCIARLOS A UNA VARIABLE QUE VA A ALMANACENAR UN DATO: EN ESTE CASO EN RESULTADO DE LA SUMA.

let sumaAnonima = function (a,b) {return a + b};
console.log(sumaAnonima(1000,1000));

let restaAnonima = function (a,b) {return a - b};
console.log(restaAnonima(10000, sumaAnonima(1000,2000)));

//** FUNCIÓN FLECHA*/
//Identificamos a las funciones flechas como anónimas de sintaxis mas simplificada.

let division = (a,b) => { return a/b};
console.log ("División con función flecha: ");
console.log(division (100,5));

//Return implícito:
let multiplicar = (a,b) => a * b;
console.log(multiplicar(50,50));

//función con un ÚNICO parámetro:
let nombre = a => console.log ("Hola " + a);
nombre("Luli");




















