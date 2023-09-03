
// array.findIndex(function(){}) এই মেথডটি মূলত find এর মতই কাজ করবে কিন্তু index number রিটার্ন করবে।

let numbers=[100,99,20,25,14,6];

let result=numbers.findIndex(function(items){
    return items>50;
});


console.log(result)