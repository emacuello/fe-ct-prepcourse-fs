function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  let arreglo = arrayOfStrings.filter(x => x.charAt(0) === 'a');
  return arreglo;
}

module.exports = filter;
