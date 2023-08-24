// function getMaxNumber(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return num1;
//     }
//     else if (num2 > num1 && num2 > num3) {
//         return num2;
//     }
//     else { return num3 }
// }

// var maxNumber = getMaxNumber(500, 70, 60);
// console.log("The Biggest Number of :", maxNumber);

function getMinNumber(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else { return num3 }
}

var minNumber = getMinNumber(500, 70, 60);
console.log("The Ninimum Number is :", minNumber);