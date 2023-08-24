 
let mobile = {
    color: 'black',
    price: 5000,
    screenSize: '7.5 inche',
    storage: '16gb'
}


// পদ্ধতী-১ Object এর কোন একটি Key এর মান জানতে চাইলে
console.log(mobile.color);

// পদ্ধতী-২ Object এর কোন একটি Key এর মান জানতে চাইলে
console.log(mobile['storage']);

// Object এর Key গুলো জানা না থাকলে সমস্ত Key গুলো বের করতে চাইলে
console.log(Object.keys(mobile));

// Object এর সমস্ত Value গুলো বের করতে চাইলে
console.log(Object.values(mobile));

// এটি পদ্ধতী-২ এর মতই, তবে পার্থক্য হলো বার বার পরিবর্তন করতে চাইলে এটাই সহজ পদ্ধতী
let objectChange = 'screenSize';
console.log(mobile[objectChange]);



// পদ্ধতী-১: Object এর কোন একটি Key এর মান পরিবর্তন করতে চাইলে
mobile.color='yellow';

// পদ্ধতী-২: Object এর কোন একটি Key এর মান পরিবর্তন করতে চাইলে
mobile['price']=6500;

// পদ্ধতী-৩: একটি মান বার বার পরিবর্তন করতে চাইলে এটাই সহজ পদ্ধতী
let objectValueChange = 'screenSize';
mobile[objectChange]='8.5 Inch';

console.log(mobile);

