function inchToFeet(inch) {
    let feet = inch / 12;
    return feet;
}

let resultToFeet = inchToFeet(144);
console.log("It is Covert of Inches to Feet ", resultToFeet);

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

let celsius = 33;
const resultOfFahrenheit = celsiusToFahrenheit(celsius);
console.log(resultOfFahrenheit);