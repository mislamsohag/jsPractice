/* function largestElement(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}

const numbers = [15, 64, 46, 80, 30, 67];
const result = largestElement(numbers);
console.log(result) */

function largestElement(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
    return min;
}

const numbers = [15, 64, 46, 80, 30, 67];
const result = largestElement(numbers);
console.log(result)
