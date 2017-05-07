var factors = {};
function fact(num){
    for(i = 2;i<num+1;i++){
        if(num%i == 0){
            console.log(i)
            factors[i] = i;
            num = num/i;
               }
    }
    for(var key in factors){
     for(i = 2 ;i*i <= key*i;i++){
        if(key%i == 0){
            key = key/i;
           delete factors[key]
           console.log(factors)
        }
    }
}
    return factors

}

fact(600851475143);
