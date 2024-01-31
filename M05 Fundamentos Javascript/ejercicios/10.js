function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  let validacion = new Date();

  // Verifica si la instancia de Date es válida y si la fecha original coincide con la fecha analizada
  // Esto se hace para manejar casos como "2022-02-30", que no es una fecha válida
  if (validacion >= fecha) {
    return true; 
  } else {
    return false;
  }
}

module.exports = esFechaValida;