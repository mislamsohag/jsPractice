

const fruit=['banana', 'mango', 'jacfruit', 'lichi'];


console.log(fruit); // find fruit Array

fruit[0]='Orange';  // Change first index 'banana' to 'Orange'

console.log(fruit);  // Changes Output or Result

fruit[3]='Apple';    // Change Third index 'lichi' to 'Apple'

console.log(fruit);   // Update Result

//iteration on updated array

for (let i=0; i<fruit.length; i++){
    console.log(fruit[i]);
}