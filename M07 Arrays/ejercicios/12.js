function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let result = arrayOfNums.reduce((x, y) => x + y, 0);
  return result;
}

module.exports = agregarNumeros;
