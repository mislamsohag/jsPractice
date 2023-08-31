

function multipleSeries(num){
    let multi = 1;
    for(let multiple of num)
    multi=multi*multiple;
    return multi;
}

let numbers = [1, 3, 5];

console.log(multipleSeries(numbers));