

// Array to convert function 


function myArray (arr){
    let num=1;
    for(let i=0; i<=arr.length; i++){
        num += arr[i];
    }
    return num;
}

console.log(myArray(10));