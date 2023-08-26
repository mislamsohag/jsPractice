

function sumOddNumbers(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        let number=numbers[i];
        // console.log(number);        
        if(number%2!=0){
            sum = sum+number;
        }
    }
    return sum;
}

const numbers=[12, 15, 13, 18, 65];

const result = sumOddNumbers(numbers);
console.log(result);