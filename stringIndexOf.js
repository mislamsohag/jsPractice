
// String এর ক্ষেত্রে ২টি indexOf('') আছে। যেমন: indexOf('') এবং lastIndexOf('')। এই দুটো দিয়ে একই কাজ করা হয়। কিন্তু একাধিক index থাকলে indexOf('') এটি প্রথমটি দিবে, আর lastIndexOf('') এটি শেষের index দিবে। যেমন:

let country='Bangladesh';

let result=country.indexOf('a');
console.log(result);


// কিন্তু আমি যদি lastIndexOf('') ব্যবহার করি তাহলে শেষের index টি দেখাতো। যেমন:

let country1='Bangladesh';

let result1=country1.lastIndexOf('a');
console.log(result1);
