// Ejemplo
// arr=[1,3,5,7,9]
// La suma mínima es 1+3+5+7=16 y la suma máxima es 3+5+7+9=24. La función imprime [16,24]

function miniMaxSum(arr) {
  // Write your code here

  function comparar(a, b) {
    return a - b;
  }
  let arrSort = arr.sort(comparar);
  // console.log(arr.sort(comparar));
  let min = 0;
  let max = 0;
  for (let i = 1; i < arrSort.length; i++) {
    min += arrSort[i - 1];
    max += arrSort[arrSort.length - i];
  }
  console.log(min, max);
}
