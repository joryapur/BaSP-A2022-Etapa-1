console.log("---EXERCISE 6 : FUNCTIONS---");

/*
  a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función
   y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
*/
console.log("-EXERCISE 6.a-");

function sum(n1, n2) {
  return n1 + n2;
}

result = sum(400, 52);

console.log("Sum with a function: " + result);

/*
  b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es
   un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar
  el valor NaN como resultado.
*/
console.log("-EXERCISE 6.b-");

function sum2(numb1, numb2) {
  if (typeof numb1 !== "number" || typeof numb2 !== "number") {
    alert("You must enter a number");
    return NaN;
  } else {
    return numb1 + numb2;
  }
}

resultVal = sum2(5, 8);
console.log("Sum with validation: " + resultVal);

/*
  c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero
  si es un número entero.

*/
console.log("-EXERCISE 6.c-");

function numberIsInteger(num) {
  return Number.isInteger(num);
}

validateInt = numberIsInteger(8.5);
console.log("Is Integer: " + validateInt);

/*
  d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide
  que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número
   convertido a entero (redondeado).

*/
console.log("-EXERCISE 6.d-");

function sum3(x1, x2) {
  if (typeof x1 !== "number" || typeof x2 !== "number") {
    alert("You must enter a number");
    return NaN;
  } else if (!numberIsInteger(x1)) {
    alert("The number must be an integer");
    return Math.round(x1);
  } else if (!numberIsInteger(x2)) {
    alert("The number must be an integer");
    return Math.round(x2);
  } else {
    return x1 + x2;
  }
}

sumValidate = sum3("hola", 4);
console.log(sumValidate);

/*
    e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma
    probando que todo siga funcionando igual.


*/
console.log("-EXERCISE 6.e-");

function numIsInvalid(n) {
  if (typeof n !== "number") {
    alert("You must enter a number");
    return NaN;
  } else if (!numberIsInteger(n)) {
    alert("The number must be an integer");
    return Math.round(n);
  }
  return false;
}

console.log(numIsInvalid(4.5));
console.log(numIsInvalid("hola"));

function finalSum(n1, n2) {
  var n1IsInvalid = numIsInvalid(n1);
  if (n1IsInvalid || Number.isNaN(n1IsInvalid)) {
    return n1IsInvalid;
  }
  var n2IsInvalid = numIsInvalid(n2);
  if (n2IsInvalid || Number.isNaN(n2IsInvalid)) {
    return n2IsInvalid;
  }
  return n1 + n2;
}

var result = finalSum("hola", 10);

console.log("Sum with a function: " + result);
