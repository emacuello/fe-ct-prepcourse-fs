function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  const entero = Math.sign(num)
    if (entero === 1) {
      return ('Es positivo');
    } else if (entero === -1) {
      return ('Es negativo');
    } else {
      return false;
    }
}

module.exports = esPositivo;