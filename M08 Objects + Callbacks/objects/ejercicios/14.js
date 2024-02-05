function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  let valor = objetoUsuario['email'];
  return valor === null || valor === undefined ? false : true;
}

module.exports = tieneEmail;
