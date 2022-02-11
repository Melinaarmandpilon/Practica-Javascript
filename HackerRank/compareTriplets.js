let a = [17, 28, 30];
let b = [99, 16, 8];

function compareTriplets(a, b) {
  // Write your code here
  let resul = [0, 0];
  for (let index = 0; index < a.length; index++) {
    if (a[index] < b[index]) {
      resul[(0, resul[1]++)];
    } else if (a[index] > b[index]) {
      resul[(resul[0]++, 0)];
    }
  }
  return resul;
}
