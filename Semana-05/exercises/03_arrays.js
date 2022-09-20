console.log("---EXERCISE 3 : ARRAYS---");

/*
    a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/
console.log("-EXERCISE 3.a-");

var arrayMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log("Month 5 y 11: " + arrayMonths[4] + " and " + arrayMonths[10]);

/*
    b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/
console.log("-EXERCISE 3.b-");

var monthsAlphabetical = arrayMonths.sort();

console.log("Months in alphabetical order: " + monthsAlphabetical);

/*
    c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/
console.log("-EXERCISE 3.c-");

arrayMonths.unshift(2022);
arrayMonths.push(2023);

console.log("Add 2 elements: " + arrayMonths);

/*
    d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/
console.log("-EXERCISE 3.d-");

arrayMonths.shift();
arrayMonths.pop();
console.log("Remove two elements: " + arrayMonths);

/*
    e. Invertir el orden del array (utilizar reverse).
*/
console.log("-EXERCISE 3.e-");

arrayMonths.reverse();

console.log("Reverse Array : " + arrayMonths);

/*
    f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*/
console.log("-EXERCISE 3.f-");

console.log("Join array elements: " + arrayMonths.join("-"));

/*
    g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/
console.log("-EXERCISE 3.g-");

var arrayMonths2 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var arrayMonthsSlice = arrayMonths2.slice(4, 11);

console.log("Slice array: " + arrayMonthsSlice);
