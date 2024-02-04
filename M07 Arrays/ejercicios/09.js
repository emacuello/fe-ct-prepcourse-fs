function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let mayoresADiez = array.filter(mayor => mayor > 10);
  if (array.length === 0) return 0; 
  else return mayoresADiez.length;
}

module.exports = contarElementosMayoresA10;
