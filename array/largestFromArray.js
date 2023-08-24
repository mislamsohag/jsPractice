

function largestFromArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];

        if (element < largest) {
            largest = element;
        }
    }
    return largest;
}

let numbers = [14, 61, 53, 54, 85, 65];
let numbers1 = [-14, -61, -53, -4, -85, -65];
const result = largestFromArray(numbers);
const result1 = largestFromArray(numbers1);
console.log(result);
console.log(result1);