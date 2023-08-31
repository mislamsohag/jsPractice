

function seriesNumber (num){
    let sum=0;
    for (let i=0; i<num.length; i++){
        let number=num[i];
        sum=sum+number;
    }
    return sum;
}



const numbers=[1,3,5,7,9,11,13,15];
let seriesAdd=seriesNumber(numbers);
console.log(seriesAdd);