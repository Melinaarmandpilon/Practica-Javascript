//1°SOLUCION
function FindNeedle(haystack, needle) {
  //1° iteramos sobre el haystack
  for (
    let haystackindex = 0;
    haystackindex < haystack.length;
    haystackindex++
  ) {
    //2° iteramos sobre el needle
    for (let needleindex = 0; needleindex < needle.length; needleindex++) {
      //3° comparamos la letra del needle en la que estamos con la letra del haystack
      //4° Cuando no hay match cortamos la comparación con el needle
      if (haystack[haystackindex + needleindex] !== needle[needleindex]) break;
      //5°   si terminamos de recorrer la needle devolvemos el haystackIndex
      if (needleindex + 1 === needle.length) return haystackindex;
    }
  }
  // una vez que termina el loop y no encontramos match devolvemos -1
  return -1;
}

// Complejidad temporal: es el número de operaciones que realiza un algoritmo para completar su tarea
//(considerando que cada operación dura el mismo tiempo)
// O(n*m) --> n y m son las longitudes de los string

//Complejidad espacial:espacio en memoria
// O(1)

//2° SOLUCION
function FindNeedle2(haystack, needle) {
  for (let index = 0; index < haystack.length; index++) {
    if (haystack.slice(index, index + needle.length) === needle) {
      return index;
    }
  }
  return -1;
}
// Complejidad temporal:O(n*m)
//Complejidad espacial:O(1)

module.exports = FindNeedle;

