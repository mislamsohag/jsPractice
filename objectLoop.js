


let friendsAge = {
    fakhrul: 28,
    masud: 25,
    bijoy: 27,
    nasir: 28,
    shanto: 29,
    saiful:32
}

// সূত্র-১: Object এর Key গুলো বের করতে এই সূত্র ব্যবহার হয়।
let objectKeys = Object.keys(friendsAge);

// সূত্র-২: Object এর value গুলো বের করতে এই সূত্র ব্যবহার হয়।
let objectValues = Object.values(friendsAge);

console.log(objectKeys);

for(let i=0; i<objectKeys.length; i++){
    let propertyName = objectKeys[i];
    // এখানে সূত্র নং-২ অনুসরণ করে করা হয়েছে।
    let propertyValue = friendsAge[propertyName];
    console.log(propertyName, propertyValue);
}


// বিকল্প পদ্ধতী: fon in loop use করা
for (let propertyName in friendsAge){
    let propertyValue = friendsAge[propertyName];
    console.log(propertyName, propertyValue);
}