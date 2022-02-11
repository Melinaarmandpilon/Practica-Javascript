// Dada una matriz de enteros, calcule las proporciones de sus elementos que son positivos , negativos y cero .
// Imprime el valor decimal de cada fracción en una nueva línea conlugares después del decimal.

// Nota: Este desafío presenta problemas de precisión. Los casos de prueba están escalados a seis decimales,
// aunque las respuestas con un error absoluto de hastason aceptables.

// Ejemplo
// arr=[1,1,0,-1,-1]
// Existen n=5 elementos, dos positivos, dos negativos y uno cero. sus proporciones son 2/5=0.400000, 2/5=0.400000 y 1/5=0.200000.
//Los resultados se imprimen como:
// 0.400000
// 0.400000
// 0.200000

function plusMinus(arr) {
  // Write your code here
  let n = arr.length;
 
  let positivos = 0;
  let negativos = 0;
  let cero=0;
   for (let index = 0; index < arr.length; index++) {
    if (arr[index]>0) positivos++
    else if (arr[index]<0) negativos++
    else cero++
  }
  return [(positivos/n), (negativos/n),(cero/n)].forEach(e=>(console.log(Number(e).toFixed(6))));

}

//otra forma
function plusMinus(arr) {
    // Write your code here
    let n = arr.length;
   
    let positivos = 0;
    let negativos = 0;
    let cero=0;
    arr.forEach(e=>{
        if (e>0) positivos++
       else if (e<0) negativos++
       else cero++
     })
    
   return [(positivos/n), (negativos/n),(cero/n)].forEach(e=>(console.log(Number(e).toFixed(6))));
   
  
  }