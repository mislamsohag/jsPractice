let num1 = 50;
let num2 = 70;
let num3 = 90;

/* if (num1 > num2 && num1 > num3) {
    console.log(num1, 'is grater then', num2, 'and', num3);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2, "is grater then", num1, 'and', num3);
} else {
    console.log(num3, 'is grater then', num1, 'and', num2);
} */

/* let maxNumber = Math.max(num1, num2, num3)
console.log(maxNumber);
let minNumber = Math.min(num1, num2, num3)
console.log(minNumber); */

function maxNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

let result = maxNumber(num1, num2, num3)
console.log('The Max Number is :', result);