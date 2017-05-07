Problem: 6

function sumSquares(){
    var sum = 0;
    var sum2 = 0;
    for(var i = 1;i<=100;i++){
        sum = sum+Math.pow(i,2);
        sum2 = sum2+i;
    }
    return Math.pow(sum2,2)-sum;
}



sumSquares();
