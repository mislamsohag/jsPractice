
// Array.from()  এই মেথডটির মাধ্যমে String কে Array তে রূপান্তর করা হয়।

let name='Md. Mazharul Islam Sohag';
let arrayFrom=Array.from(name);
console.log(arrayFrom);



// একটি Array থেকে ১০ থেকে বড় নম্বরগুলো আলাদা করা হয়েছে।
let number=[10, 20, 21, 15, 30, 56, 23,75];
let numArr=[];
for (i=0; i<number.length; i++){
    let num=number[i];

    if(num>10){
        numArr.push(num);
    }
}

console.log(numArr);