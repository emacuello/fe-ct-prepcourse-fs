function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let pares = array.filter(array => array % 2 === 0);
  return pares;
}

module.exports = filtrarNumerosPares;
