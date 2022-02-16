// La casa de Sam tiene un manzano y un naranjo que dan abundante fruta. 
// Usando la información dada a continuación, determine la cantidad de manzanas y naranjas que caen en la casa de Sam.

// En el siguiente diagrama:

// La región de la casa, donde "s" es el punto de partida y " "es el punto final. 
//El manzano está a la izquierda de la casa y el naranjo está a su derecha.
// Suponga que los árboles están ubicados en un solo punto, donde el manzano está en el punto "a", y el naranjo está en el punto "b".
// Cuando una fruta cae de su árbol, aterriza "d" unidades de distancia desde su árbol de origen a lo largo de la x-eje. 
//*Un valor negativo designifica que la fruta cayó "d" unidades a la izquierda del árbol, 
//y un valor positivo de "d" significa que cae "d" unidades a la derecha del árbol. *
// let s = 7;
// let t = 10;
// let a = 4;
// let b = 12;
// let apples = [2, 3, -4]; //unidades de distancia de a
// let oranges = [3, -2, -4]; //unidades de distancia de b
// countApplesAndOranges(s, t, a, b, apples, oranges);

// apples=[2 +4,3+4,-4+4]=[6,7,0]
// orange=[3+10,-2+10,-4+10]=[13,8,6]


function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let countApples = 0;
  let countOranges = 0;
  for (let i = 0; i < apples.length; i++) {
    if (apples[i] + a >= s && apples[i] + a <= t) countApples += 1;
  }
  for (let i = 0; i < oranges.length; i++) {
    if (oranges[i] + b >= s && oranges[i] + b <= t) countOranges += 1;
  }
  console.log(countApples);
  console.log(countOranges);
}
