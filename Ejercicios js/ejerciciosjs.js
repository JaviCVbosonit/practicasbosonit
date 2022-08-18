//Ejercicio 1
//Dado un array de objetos, obtener el objeto con el id 3

const arrNames = [
  { id: 1, name: "Pepe" },
  { id: 2, name: "Juan" },
  { id: 3, name: "Alba" },
  { id: 4, name: "Toby" },
  { id: 5, name: "Lala" },
];

let solution = arrNames.find((i) => {
  return i.id === 3;
});

console.log("Ejercicio 1");
console.log(solution);

//Ejercicio 2
// Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)

const arrDirty = [NaN, 0, 5, false, -1, "", undefined, 3, null, "test"];

const solution2 = arrDirty.filter((i) => i);

console.log("Ejercicio 2");
console.log(solution2);

//Ejercicio 3
// Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales

const arrCities = [
  { city: "Logroño", country: "Spain", capital: false },
  { city: "Paris", country: "France", capital: true },
  { city: "Madrid", country: "Spain", capital: true },
  { city: "Rome", country: "Italy", capital: true },
  { city: "Oslo", country: "Norway", capital: true },
  { city: "Jaén", country: "Spain", capital: false },
];

function searchCapital(arr) {
  return arr.filter((city) => !city.capital && city.country === "Spain");
}

console.log("Ejercicio 3");
console.log(searchCapital(arrCities));

//Ejercicio 4
// Dado tres arrays de números, sacar en un nuevo array la intersección de estos.

const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

const solution4 = arrNumber3.filter((item) =>
  arrNumber1.filter((item) => arrNumber2.includes(item)).includes(item)
);

console.log("Ejercicio 4");
console.log(solution4);

//Ejercicio 5
// Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain. El valor de isSpain será un booleano indicando si es una ciudad de España.

const arrCities2 = [
  { city: "Logroño", country: "Spain", capital: false },
  { city: "Bordeaux", country: "France", capital: false },
  { city: "Madrid", country: "Spain", capital: true },
  { city: "Florence", country: "Italy", capital: true },
  { city: "Oslo", country: "Norway", capital: true },
  { city: "Jaén", country: "Spain", capital: false },
];

const noCapital = arrCities2
  .filter((city) => !city.capital && city.country === "Spain")
  .map((city) => {
    return { city: city.city, isSpain: true };
  });

console.log("Ejercicio 5");
console.log(noCapital);

//Ejercicio 6
// Crea una función que redondee un número float a un número específico de decimales.
// La función debe tener dos parámetros:
// Primer parámetro es un número float con x decimales
// Según parámetro es un int que indique el número de decimales al que redondear
// Evitar usar el método toFixed()

const roundedResult = (number, roundTo) => {
  return Math.round(number * 10 ** roundTo) / 10 ** roundTo;
};
console.log("Ejercicio 6");
console.log(roundedResult(2.1233, 2));

//Ejercicio 7
// Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
// La fundación debe tener dos parámetros:
// Primer parámetro es un objeto con x número de campos y valores
// Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro

let returnFalsyValues = (obj, fn) => {
  const isFalsy = Object.keys(obj).map((ke) => {
    const va = obj[ke];
    console.log(ke, "=>", va);
    if (typeof va !== "string") {
      console.log(va);
    }
  });

  return fn(obj);
};

console.log("Ejercicio 7");
console.log(
  returnFalsyValues({ a: 1, b: "2", c: 3 }, (x) => typeof x === "string")
);

//Ejercicio 8

// Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
// La función debe tener 2 parámetros:
// Primer parámetro debe ser el número de bytes
// Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.

function formatBytes(bytes, precision = 3) {
  const units = [" B", " KB", " MB", " GB", " TB", " PB", " EB", " ZB", " YB"];
  var index = 0;
  do {
    bytes = bytes / 1024;
    index++;
  } while (bytes > 1024 || bytes < -1024);
  if (units[index] === undefined) {
    return "They value is too high";
  }
  return bytes.toPrecision(precision) + units[index];
}

console.log("Ejercicio 8");
console.log(formatBytes(1024, 1));
console.log(formatBytes(123456789));
console.log(formatBytes(-12145489451.5932, 5));

//Ejercicio 9
// Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
// La función debe tener un objeto como único parámetro.

function toLowercaseKeys(obj) {
  let finalObject = {};
  for (let value in obj) {
    finalObject[value.toLowerCase()] = obj[value];
  }
  return finalObject;
}
console.log("Ejercicio 9");
console.log(toLowercaseKeys({ NamE: "Charles", ADDress: "Home Street" }));

//Ejercicio 10
// Crea una función que elimine las etiquetas html o xml de un string.
// La función debe tener un string como único parámetro.
// Ejemplo de uso de la función:

function removeHTMLTags(html_xml) {
  var regex = /(<.[^(><.)]+>)/g;
  html_xml = html_xml.replace(regex, "");
  return html_xml;
}

console.log("ejercicio 10");
console.log(
  removeHTMLTags("<div><span>Hello</span> <strong>World</strong></div>")
);
console.log(
  removeHTMLTags(
    '<ul id="nav-access" class="a11y-nav"><li><a id="skip-main" href="#content">Deleting tags</a></li><li><a id="skip-search" href="#top-nav-search-q"></a></li><li><a id="skip-select-language" href="#languages-switcher-button"></a></li></ul>'
  )
);

//Ejercicio 11
console.log("Ejercicio 11");
// Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.
// La función debe tener dos parámetros:
// El primer parámetro es el array entero que se quiere dividir.
// El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.

const splitArrayIntoChunks = (arr, length) => {
  let splittedArray = [];
  let firstNumber = 0;
  let finalNumber = length;
  for (let i = 0; i < parseInt(arr.length / length) + 1; i++) {
    splittedArray.push(arr.slice(firstNumber, finalNumber));
    finalNumber += length;
    firstNumber += length;
    if (finalNumber > arr.length) {
      finalNumber = arr.length;
    }
  }
  return splittedArray;
};

const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
