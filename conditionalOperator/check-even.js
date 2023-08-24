/* function isEven(number) {
    const cheakNumber = number % 2;
    if (cheakNumber == 0)
        console.log(number, 'This is Even Number');
    else if (cheakNumber == 1) {
        console.log(number, 'This number is Odd number')
    }
    else { 'Please enter an integer number' };
}
isEven(125); */


function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;

}

const myNumber = 15;
const myResult = isEven(myNumber);
console.log(myResult)