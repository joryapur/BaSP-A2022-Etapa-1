console.log("---EXERCISE 1 : VARIABLES AND OPERATORS---");
/*
    a. Crear dos variables numéricas y utilizar el operador suma para guardar
    el valor de la suma de ambos números en una 3er variable.
*/
console.log("-EXERCISE 1.a-");

var num1 = 2;
var num2 = 3;
var resultSum = num1 + num2;

console.log("Sum: " + resultSum);

/*
    b. Crear dos variables de tipo String y concatenarlas guardando el resultado
    en una 3er variable.
*/
console.log("-EXERCISE 1.b-");

var firstName = "Pepe";
var lastName = "Gomez";
var completeName = firstName + " " + lastName;

console.log("Name: " + completeName);

/*
    c. Crear dos variables de tipo String y sumar el largo de cada variable
    (cantidad de letras del string) guardando el resultado de la suma en una
     3er variable (utilizar length).
*/
console.log("-EXERCISE 1.c-");

var color = "Rojo";
var animal = "Perro";
var variablesLength = color.length + animal.length;

console.log("Length sum: " + variablesLength);
