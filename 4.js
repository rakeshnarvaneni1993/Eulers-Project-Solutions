function checkPalindrome(num){
    var number = num.toString();
    var array = number.split("");
    var reverseArray = array.reverse().join("");
    if(num == reverseArray){
        console.log(" Yes "+num+"  is a palindrome");
    }
}


for(var i = 999;i>800;i = i-1){
    for(var j = 999;j>800;j--){
            checkPalindrome(i*j);
    }
}
