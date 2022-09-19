console.log("---EXERCISE 2 : STRINGS---");

/*
    a. Crear una variable de tipo string con al menos 10 caracteres y convertir
     todo el texto en mayúscula (utilizar toUpperCase).
*/
console.log("-EXERCISE 2.a-");

var saludo = "Buenas noches";

console.log("String a mayúscula: " + saludo.toUpperCase());

/*
    b. Crear una variable de tipo string con al menos 10 caracteres y generar
    un nuevo string con los primeros 5 caracteres guardando el resultado en una 
    nueva variable (utilizar substring).
*/
console.log("-EXERCISE 2.b-");

var animal = "Murciélago";
var firstFiveChar = animal.substring(0, 5);

console.log("Primeros 5 caracteres de Murciélago: " + firstFiveChar);

/*
    c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
     con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/
console.log("-EXERCISE 2.c-");

var banda = "Babasónicos";
var threeLastChar = banda.substring(8, 11);

console.log("Últimos 3 caracteres de Babasónicos : " + threeLastChar);

/*
    d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la
     primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
      (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/
console.log("-EXERCISE 2.d-");

var nombre = "eVANGELINA";
var nombre2 =
  nombre.substring(0, 1).toUpperCase() + nombre.substring(1, 10).toLowerCase();

console.log("String con Uppercase y Lowercase: " + nombre2);

/*
    e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la
     posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/
console.log("-EXERCISE 2.e-");

var animal = "Golond rina";
var whiteSpace = animal.indexOf(" ");

console.log("Index del espacio en blanco: " + whiteSpace);

/*
    f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
    Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de
     ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase
         y el operador +).
*/
console.log("-EXERCISE 2.f-");

var comida = "mIlaNEsas fRItAs";
var space = comida.indexOf(" ");
var comidaUpperLower =
  comida.substring(0, 1).toUpperCase() +
  comida.substring(1, space).toLowerCase() +
  " " +
  comida.substring(space + 1, space + 2).toUpperCase() +
  comida.substring(space + 2, comida.length).toLowerCase();
console.log(comidaUpperLower);
