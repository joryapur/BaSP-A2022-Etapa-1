console.log("---EXERCISE 2 : STRINGS---");

/*
    a. Crear una variable de tipo string con al menos 10 caracteres y convertir
     todo el texto en mayúscula (utilizar toUpperCase).
*/
console.log("-EXERCISE 2.a-");

var greeting = "Good Night";

console.log("Uppercase: " + greeting.toUpperCase());

/*
    b. Crear una variable de tipo string con al menos 10 caracteres y generar
    un nuevo string con los primeros 5 caracteres guardando el resultado en una
    nueva variable (utilizar substring).
*/
console.log("-EXERCISE 2.b-");

var animal = "chimpanzee";
var firstFiveChar = animal.substring(0, 5);

console.log("First five characters: " + firstFiveChar);

/*
    c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
     con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/
console.log("-EXERCISE 2.c-");

var band = "Babasónicos";
var threeLastChar = band.substring(8, 11);

console.log("Last 3 characters : " + threeLastChar);

/*
    d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la
     primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
      (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/
console.log("-EXERCISE 2.d-");

var person = "eVANGELINA";
var personName =
  person.substring(0, 1).toUpperCase() + person.substring(1, 10).toLowerCase();

console.log("String con Uppercase y Lowercase: " + personName);

/*
    e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la
     posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/
console.log("-EXERCISE 2.e-");

var animal = "Golond rina";
var whiteSpace = animal.indexOf(" ");

console.log("Whitespace index: " + whiteSpace);

/*
    f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
    Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de
     ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase
         y el operador +).
*/
console.log("-EXERCISE 2.f-");

var food = "mIlaNEsas fRItAs";
var space = food.indexOf(" ");
var foodUpperLower =
  food.substring(0, 1).toUpperCase() +
  food.substring(1, space).toLowerCase() +
  " " +
  food.substring(space + 1, space + 2).toUpperCase() +
  food.substring(space + 2, food.length).toLowerCase();
console.log(foodUpperLower);
