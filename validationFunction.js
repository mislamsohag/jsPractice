

function addTwoNumber(num1, num2){
    if(typeof num1!=='number' || typeof num2 !=='number'){
        return 'Please Input Valid Numbers';   }
    
    return num1*num2;
}

console.log(addTwoNumber(20,30));