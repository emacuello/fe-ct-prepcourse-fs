function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let primero = array[0]
  let iguales = array.every(x => x === primero);

  return iguales;
  
}

module.exports = todosIguales;
