/* 
  - if/else
  - for
  - while
  - ternary operators

*/

/*

USO DE LOS IGUALES
- 1 solo igual (=): es para asignacion. Por ejemplo const numero = 10;
- 2 igual (==): es para comparación del mismo valor. Por ejemplo if (2 == 2)
- 3 igual (===): es para comparación del mismo de valor y del mismo tipo. Por ejemplo if ("2" === 2)
- 1 desigual (!=): es cuando una variable es de distinto valor a otra variable
- 2 desigual (!==): es cuando una variable es de distinto valor o distinto tipo a otra variable
*/

const persona1 = {
  nombre: "Matías",
  edad: 20,
};

const persona2 = {
  nombre: "Iván",
  edad: 20,
};

if (persona1.nombre === "Matías") {
  console.log(persona1.nombre);
}

if (persona1.edad === 20) {
  console.log("La edad es 20");
} else {
  console.log("No coincidió el nombre");
}

/*
 El ciclo for tiene 3 etapas
   1- la inicialización de la variable/número
   2- hasta cuándo querés que realice la acción/conjunto de código
   3- qué querés que se haga con la variable que inicializaste

*/

var alumnos = ["Zarbo", "Iván", "Valentrix", "Nuzze", "jsjaja", "jajsjjas", "haha"];

for (var i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i]);
}

alumnos = alumnos.filter((el) => el === "Zarbo");

console.log(alumnos);

const numero1 = "2";
const numero2 = 2;

if (numero1 !== numero2) {
  console.log("jaja");
}