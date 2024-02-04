function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let mayusculas = array.map(x => x.toUpperCase());
  return mayusculas;
}

module.exports = convertirStringAMayusculas;
