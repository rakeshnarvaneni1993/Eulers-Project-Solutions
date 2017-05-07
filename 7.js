function primesList(){
    var primes = {2:2,};
    for(var i = 3;i<200000;i++){
        var isPrime = false;
        for(var j = 2;j<i;j++){
            if(i%j === 0){
                isPrime = true;
                break;
            }
        }
        if(!isPrime){
            primes[i] = i;
        }
    }
    return primes;
}

var list = primesList();
console.log(Object.keys(list).length)
console.log(list)
console.log(list[Object.keys(list)[10000]]);
