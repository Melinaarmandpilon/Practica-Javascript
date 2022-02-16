// Estás coreografiando un espectáculo de circo con varios animales.
// Para un acto, se le dan dos canguros en una recta numérica listos para saltar en la dirección positiva (es decir, hacia el infinito positivo).

// El primer canguro comienza en la ubicación "x1" y se mueve a una velocidad de "v1" metros por salto.
// El segundo canguro comienza en la ubicación "x2" y se mueve a una velocidad de "v2" metros por salto.
// Tienes que encontrar una manera de llevar a ambos canguros al mismo lugar al mismo tiempo como parte del espectáculo.
//Si es posible, devuelve YES, de lo contrario, devuelve NO.
// Ejemplo:
// x1=2
// v1=1
// x2=1
// v2=2
//Después de un salto, ambos están en x=3, (x1+v1=2+1,x2+v2=1+2), por lo que la respuesta es YES.

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let jumps = (x2 - x1) / (v1 - v2);
  let resto = (x2 - x1) % (v1 - v2);

  if (x2 > x1 && v2 > v1) {
    return "NO";
  } else if (
    (resto === 0 && x1 + v1 * jumps === x2 + v2 * jumps) ||
    x1 + v1 === x2 + v2
  ) {
    return "YES";
  } else {
    return "NO";
  }
}
