//concat means joining multiple words/characters/sentences

const myName = 'Md. Mazharul Islam Sohag.';
const myAge =30;
const myEducation = 'Diploma in Computer Engineering';

console.log('My Name ' + myName + ' My Age ' + myAge + ' and I\'am student of ' + myEducation)

//Use template literals
console.log(`My Name ${myName}, my age ${myAge} and I'am student of '${myEducation}`);


//A String concat with a number after showing the result of a String
console.log(myAge+20);

//If Input value is String but I need a value of Number. In that case I can convert String to Numbe
console.log(parseInt(myAge+20));

//Somehow I know my input is a String value but i want to operation this string value with a number. it returns Result of String. But I want a summation. At first I convert string input value to number. String value to number convert methode name of parseInt() or parseFloat() 
console.log(parseInt(myAge) + 20)

