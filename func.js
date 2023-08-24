
//Adding Function 0 to input Number 

function myFunc (x){
    let num = 1;
    for(let i=0; i<=x; i++){
        num+=i;
    }
    return num;
}
console.log(myFunc(8));