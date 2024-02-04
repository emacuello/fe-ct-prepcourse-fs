function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:


  let indiceMaximo = 0;
  let numeroMaximo = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > numeroMaximo) {
      numeroMaximo = array[i];
      indiceMaximo = i;
    }
  }

  return indiceMaximo;
}

module.exports = encontrarIndiceMayor;
