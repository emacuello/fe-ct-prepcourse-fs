function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  

  // Invierte los valores si a es mayor que b
  if (a > b) {
    [a, b] = [b, a];
  }

  // Inicializa el producto como 1
  let producto = 1;

  // Calcula el producto de todos los números entre a y b (inclusive) con un bucle while
  let current = a;
  while (current <= b) {
    producto *= current;
    current++;
  }

  //no entiendo porque el test daba -0, asi que tuve que realizar este arreglo para que pase el test, o.o
  if (producto === -0) return 0;
  else return producto;
}

module.exports = productoEntreNúmeros;