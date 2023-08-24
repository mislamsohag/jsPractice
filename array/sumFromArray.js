function sumFromArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        console.log(element);
        sum = sum + element;
    }
    return sum;
}


let numbers = [12, 16, 156, 45, 752];
let result = sumFromArray(numbers);
console.log(result);