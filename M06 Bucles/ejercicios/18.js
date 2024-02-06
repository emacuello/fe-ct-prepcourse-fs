function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  
  if (a > b) {
    [a, b] = [b, a];
  }

  let producto = 1;
  let arg = a;
  while (arg <= b) {
    producto *= arg;
    arg++;
  }
  //no entiendo porque el test daba -0, asi que tuve que realizar este arreglo para que pase el test, o.o
  if (producto === -0) return 0;
  else return producto;
}

module.exports = productoEntreNúmeros;