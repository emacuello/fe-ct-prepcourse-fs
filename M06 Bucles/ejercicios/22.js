function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:

  if (mes < 1 || mes > 12) {
    return 0;
    //segun el test deberia devolver esto, cuando este fuera del rango de meses, no se especificó en arriba
  }

  do {
    if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
      return 31;
    }
    else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
      return 30;
    }
    else if (mes === 2) {
      return 28;
    }
  } while (false); 
}

module.exports = diasEnMes;
