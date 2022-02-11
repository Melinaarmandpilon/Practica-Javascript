function simpleArraySum(ar) {
    // Write your code here
 let suma=0;
 for (let index = 0; index < ar.length; index++) {
     suma=+ array[index];
 }
 return suma;
 
}

function simpleArraySum(ar) {
    // Write your code here
    return ar.reduce(function (sum,element){return sum+element},0);
}