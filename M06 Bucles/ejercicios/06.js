function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  let digitos = num.toString()
  if (digitos.length === 3) return true;
  else return false;

}

module.exports = tieneTresDigitos;
