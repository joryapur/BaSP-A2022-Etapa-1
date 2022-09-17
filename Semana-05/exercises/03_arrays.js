console.log("---EXERCISE 3 : ARRAYS---");

/*
    a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/
console.log("-EXERCISE 3.a-");

var arrayMeses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

console.log("Mes 5 y 11: " + arrayMeses[4] + " y " + arrayMeses[10]);

/*
    b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/
console.log("-EXERCISE 3.b-");

var mesesAlfabeticamente = arrayMeses.sort();

console.log("Meses ordenados alfabeticamente: " + mesesAlfabeticamente);

/*
    c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/
console.log("-EXERCISE 3.c-");

arrayMeses.unshift(2022);
arrayMeses.push(2023);

console.log("Agrego 2 elementos: " + arrayMeses);

/*
    d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/
console.log("-EXERCISE 3.d-");

arrayMeses.shift();
arrayMeses.pop();
console.log("Quito 2 elementos: " + arrayMeses);

/*
    e. Invertir el orden del array (utilizar reverse).
*/
console.log("-EXERCISE 3.e-");

arrayMeses.reverse();

console.log("Array invertido: " + arrayMeses);

/*
    f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*/
console.log("-EXERCISE 3.f-");

console.log("Elementos del array con join: " + arrayMeses.join("-"));

/*
    g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/
console.log("-EXERCISE 3.g-");

var arrayMeses2 = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

var arrayMesesSlice = arrayMeses2.slice(4, 11);

console.log("Array con slice: " + arrayMesesSlice);
