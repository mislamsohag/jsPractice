function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var feet = inchToFeet(144);
console.log('My converted feet', feet);
