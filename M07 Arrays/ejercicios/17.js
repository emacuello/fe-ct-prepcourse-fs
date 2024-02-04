function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let tablaDel6 = [];
  for (let i = 1; i <= 60; i++) {
    if (i % 6 === 0) {
      tablaDel6.push(i);
    }
  }
  return tablaDel6;
}

module.exports = tablaDelSeis;
