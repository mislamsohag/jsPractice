

function fectorialReverse(number){
    let result=1;
    for(let i=number; i>=1; i--){
        result=result*i;
    }
    return result;
}

console.log(fectorialReverse(5));