const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let total = Object.keys(objeto);
  return total.length;
  //así es mas fácil xd
};

module.exports = contarPropiedades;
