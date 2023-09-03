// array.filter(function(){}) এর মাধ্যমে array এর উপাদানগুলোকে চাহিদামত ফিল্টার করা যায়। ফিল্টার রেঞ্জের মধ্যে যা পাবে সব কিছুই রিটর্ন করবে।

const arr=[10,20,21,23,11,14,15,51];

let result=arr.filter(function(item){
    // console.log(item);
    return item<21;
})

console.log(result);