//Logical Opereto and Comments Use

const x = 1;   //This is variable diclaration
const y = 20;

if(x===10 && y===20){    // যদি দুটি শর্ত ঠিক হয় তখনএই ব্লক কাজ করবে
  console.log("Your are right");
}
else if (x===15 || y===20){      // যদি একটি শর্তও ঠিক থাকে তখনএই ব্লক কাজ করবে
  console.log("Your Name is MD. Mazharul Islam")
}

else if (x!==y){      // যদি দুটি নম্বর এক না হয় তখনএই ব্লক কাজ করবে
  console.log("Those Number are not Equal");
}

else if (x == y){      // যদি দুটি নম্বর এক হয় তখনএই ব্লক কাজ করবে
  console.log("Those Number are Equal");
}

else{         // তথ্য না মিললে সবশেষে ব্লক কাজ করব
  console.log("Something is wrong");
}