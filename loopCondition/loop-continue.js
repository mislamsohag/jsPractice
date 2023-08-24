
// for (var i = 0; i < 10; i++) {
//     if (i < 6) {
//         continue;
//     }
//     console.log(i);

// }

var numbers = [10, 12, 50, 30, 15, 51, 60];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 20) {
        continue;
    }
    console.log(number);
}
