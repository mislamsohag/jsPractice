

// substr() এই মেথডের মাধ্যমে String এর নির্ধারিত অংশ কাটা যায়। যেমন:
// নিয়ম হলো যে index থেকে কাটব এবং কতটি index কাটব তা কমা দিয়ে লেখা।
let myCountry='Bangladesh';

let result =myCountry.substr(6, 5);
console.log(result);


// নিয়ম হলো যে index থেকে কাটব এবং শুরু থেকে যত index পর্যন্ত কাটব তা কমা দিয়ে লেখা।
let result1 =myCountry.substring(4, 8);

console.log(result1);