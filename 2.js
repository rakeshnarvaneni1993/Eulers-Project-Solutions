function fib(){
    var sum = 0;
    numbers = {0:0,1:1};
    for(i = 2;i<37;i++){
      numbers[i] = numbers[i-1]+numbers[i-2]
    }
    for(i = 0;i<34;i++){
        if(numbers[i]%2 == 0){
            sum = sum+numbers[i]
        }
    }
    return sum
}

fib();
