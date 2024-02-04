function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  if (array.length === 0) {
    return undefined;
  }
  if (array.length == 1) {
    return array[0];
  }
  let aleatorio = Math.floor(Math.random() * array.length);
  return aleatorio;
}

module.exports = obtenerElementoAleatorio;
