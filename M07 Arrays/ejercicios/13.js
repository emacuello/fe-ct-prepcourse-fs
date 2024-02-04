function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  let promiedo = resultadosTest.reduce((x, y) => x + y, 0);

  return promiedo / resultadosTest.length;
}

module.exports = promedioResultadosTest;
