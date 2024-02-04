function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let conteo = {};

  for (let i = 0; i < numeros.length; i++) {
    if (conteo[numeros[i]] === undefined) {
      conteo[numeros[i]] = 1;
    } else {
      return numeros[i];
    }
  }
  return undefined;

}

module.exports = encontrarElementoRepetido;