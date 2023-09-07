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

persona["aria-label"] = "Algo"

//error
const persona = {}; // error, no se puede volver a declarar

//arreglos

const arreglo = [0, 2, 3];

arreglo.push(1); //modifica el arreglo sin cambiar las condiciones o declaracion

const arreglo2 = [...arreglo] //aqui utiliza la funcion spread y mete los datos en el mismo orden

//METODOS DE ARREGLOS

// forEach

const ejemploEach = arreglo.forEach((elemento, indice) => {
    return elemento * 2;
});//retorna undefined porque no tiene return

arreglo2.forEach((elemento, indice) => {
    console.log(elemento, indice)
});// asi se usaria


//map
//map devuelve un array 
const ejemploMap = arreglo.map((elemento, indice)) => {
    return elemento * 2;
} // [2,4,6,8]


//filter: filtra y devuelve los que SI estan dentro del filtro
const ejemploFilter = arreglo.filter((elemento, indice) => {

    return elemento % 2 === 0;

}); //[2,4]

// find: devuelve el primer elemento que encuentra
const ejemploFind = arreglo.find((elemento, indice) => {
    return elemento % 2 === 0;
})//retorna solo el 2 porque es el primero que encuentra

cons ejemploFindAll = arreglo.findAll((elemento, indice) => {
    return elemento % 2 === 0;

}) // busca elementos en especifico y los devuelve


//reduce: reduce un arreglo a un valor

const ejemploReduce = arreglo.reduce((acumulador, elemento, indice) => {
    return acumulador + elemento;
}, 0); //10 


// funciones
function suma(a, b) {
    return a + b
}

function holaMundo() {
    return "Hola mundo"
}


// reemplazo a una clase en JS
function Perro(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

    this.ladrar = function(){
        return "Guau";
    };
}
// instanciar la clase
const perro = new Perro ("Firulais", 5);



//Arrow functions: tienen un retorno implicito
//Si no tiene cuerpo "{}", tiene retorno implicito
//LOS ARROW FUNCTIONS NO TIENEN UN "THIS" PROPIO ni la palabra NEW
const holaMundoArrow = () => "Hola mundo";

const esMayorDeEdad = (edad) => edad >= 18;
//como ternario

const esMayorDeEdad2 = (edad) => edad >= 18 ? "Es mayor de edad" : "Es menor de edad";


const holaMundoInternacional = (idioma) => {
    switch (idioma) {
        case "es":
            return "Hola mundo"
        case "en":
            return "Hello world"
        case "fr":
            return "Bonjour le monde"
        default:
            return "Hola mundo"
    }
};


//Crear aplicacion de react

npx create-react-app
// iniciar el app de react 
npm run start
// instalar todos los paquetes necesarios para el proyecto
npm install


//EXTENSIONES:
/*Auto close tag
Auto complete tag
Auto Rename tag
DotENV
ES7+React/Redux/React-native snippets
prettier
esLint

*/


//ESTADOS Y COSAS

//EXCLUSIVO DE CLASES
//componentDidMount se usa SOLO despues de la primer renderizacion de la pagina, solo sirve para usarlo despues del primer renderizado de los componentes
componentDidMount(){
this.setState(){
    //EL THIS.SET STATE DEL DIDMOUNT SIEMPRE RECIBE UN OBJETO CON LOS VALORES A CAMBIAR
}
}



//EXCLUSIVO DE FUNCIONES
//useEffect si se le pasa una funcion sola sirve como didMount
React.useEffect(()=>{
    //Como no tiene this.state entonces se pasa cada uno por aparte (cuando se crean los componentes se les pone el nombre de la funcion para que modifique el estado)
setNombre ("")
})