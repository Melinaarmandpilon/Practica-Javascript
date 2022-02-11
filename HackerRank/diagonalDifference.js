function diagonalDifference(arr) {
    // Write your code here
    let diagi=0;
    let diagj=0
    for (let i = 0; i < arr.length; i++) {
            diagj+=arr[arr.length-1-i][i];
            diagi+=arr[i][i];
    }
    return Math.abs(diagi-diagj)

}