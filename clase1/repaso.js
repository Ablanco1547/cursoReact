/*  TIPOS DE DATOS JS:

1. Boolean
2. String
3. Number
4. undefined o null - son tanto un tipo como un valor
*/
//declarar variable numerica
let num = 5;
//declarar variable string
let str = "Hola";

let nombre = "Luis";
//concatenar
let saludo = "Hola " + nombre;

//string templates

let saludo2 = `Hola ${nombre}`;

// variable undefined

let variable;
//es lo mismo que 

let variable2 = undefined;

// Constantes


//las constantes se utilizan en mayuscula, guarda referencia en espacio de memoria, no se puede volver a sobreescribir
const PI = 3.1416;
const PATITO = "Patito"
//Error en constante
PATITO = "Pato" //Error, no se pueden volver a declarar


//en objetos y arreglos
//valido
const persona = {}
persona.nombre = "Adrian";
persona.edad = 29;

//declaracion dinamica de atributos

let apellido = "apellido"

persona[apellido] = "Garcia"

//tambien se usa para darle atributos de 2 palabras o que llevan guion a las cosas

persona ["aria-label"] = "Algo"

//error
const persona = {}; // error, no se puede volver a declarar

//arreglos

const arreglo = [0,2,3];

arreglo.push(1); //modifica el arreglo sin cambiar las condiciones o declaracion

const arreglo2 = [...arreglo] //aqui utiliza la funcion spread y mete los datos en el mismo orden

//METODOS DE ARREGLOS

// forEach
arreglo.forEach(() =>{
    
})

//map
//filter
//reduce
//