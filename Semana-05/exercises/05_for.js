console.log("---EXERCISE 5 : FOR---");

/*
    a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de
    JavaScript para mostrar una alerta utilizando cada una de las palabras.
*/
console.log("-EXERCISE 5.a-");

var animals = ["cat", "dog", "parrot", "fox", "lion"];
for (var index = 0; index < animals.length; index++) {
  var element = animals[index];
  alert(element);
}

/*
    b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una
     alerta por cada palabra modificada.

*/
console.log("-EXERCISE 5.b-");

function upperCaseArray(array) {
  for (var index = 0; index < array.length; index++) {
    var element = array[index];
    var elementUpper =
      element.substring(0, 1).toUpperCase() +
      element.substring(1, element.length);
    alert(elementUpper);
  }
}

upperCaseArray(animals);

/*
    c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo
    con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una
    única alerta con la cadena completa.

*/
console.log("-EXERCISE 5.c-");

var sentence = "";

for (var index = 0; index < animals.length; index++) {
  var element = animals[index];
  sentence += element + " ";
}

alert("Now the string is not empty: " + sentence);

/*
    d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
    es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el
    número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).


*/
console.log("-EXERCISE 5.d-");

var numbers = [];

for (let index = 0; index < 10; index++) {
  const element = numbers[index];
  numbers.push(index);
}

console.log(numbers);
