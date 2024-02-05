function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  let resultado = arrayOfNumbers.reduce((x, y) => x + y, 0);
  cb(resultado);
}

module.exports = sumarArray;
