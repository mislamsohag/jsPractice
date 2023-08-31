
// Fectorial হলো যে সংখ্যাটির Fectorial বের করতে হবে সে সংখ্যা সহ তার নিচের সকল সংখ্যার গুনফল। যেমন: 

// 5 এর Fectorial = 5! = 5*4*3*2*1

function fectorial(input) {
    let fectorial = 1;

    for (let i = 1; i <= input; i++) {
        fectorial = fectorial * i;
        console.log(i, fectorial);
    }
    return fectorial;
}

let input = 5;
let result = fectorial(input);
console.log('Total fectorial Result', result);