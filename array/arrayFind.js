// array.find(function(){}) এর মাধ্যমে চিহ্নিত array এর index গুলো থেকে বাছাই করে শর্তের সাথে মিলে এমন প্রথম item টিকে return করে দিবে।


let numbers =[10,11,9,51,23];

const result=numbers.find(function(arrayItem){
    return arrayItem>10})

console.log(result)