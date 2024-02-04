function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:

  let primerMultiplo;

  for (let i = 0; i < secuencia.length; i++) {
    // Verifica si el número actual es un múltiplo de n
    if (secuencia[i] % n === 0) {
      if (secuencia[i === 7])
      // Si es un múltiplo, asigna el valor y rompe el bucle
      primerMultiplo = secuencia[i];
      break;
    }
  }

  return primerMultiplo;
}

module.exports = encontrarPrimerMultiploDeN;