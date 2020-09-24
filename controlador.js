let nombre = "juan";
let edad = 5;
let estaVivo = true;
let estatura = 1.62; //a cualquier variable se le puede asignar cualquier valor sin discriminar el valor de la variable

// despues de nombradas las variables con el let no se debe vovler a poner para llamarlas, solo se pone la variable

// para nombrar constantes es asi
const PI = 3.1416; //se acostumbra poner la variable en mayuscula para identificar que es variable

console.log("Hola Mundo"); //asi muestra algo en pantalla o consola
console.log(nombre);  //imprime la variable
console.log("hola como te va" + nombre);  //concatena una variable a un texto
console.log(`hola como te va ${nombre} hoy es jueves y tienes esta edad ${edad}`); //se le pone un backtic y no se tiene que concatenar con los + se concatena con ${}

console.log(`el número PI equivale a: ${PI}`);