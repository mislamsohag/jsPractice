// let fectorial = 1;
// for (let i = 1; i <= 7; i++) {
//     // console.log(i);
//     fectorial = fectorial * i;
//     console.log(fectorial);
// }

function fectorial(input) {
    let fectorial = 1;

    for (let i = 1; i <= input; i++) {
        fectorial = fectorial * i;
        console.log(fectorial);
    }
    return fectorial;
}

let input = 4;
let result = fectorial(input);
console.log('Total fectorial Result', result);