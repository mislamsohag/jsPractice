

const name='Md. Mazharul Islam sohag';

// .includes() এর মাধ্যমে ‘’ এর মধ্যের অক্ষর গুলো আছে কিনা পরীক্ষা করা হয়।
console.log(name.includes('sohag'));

// এখানে substring() এর মাধ্যমে প্রথম ৪ নং index থেকে ২০ নং index পর্যন্ত কেকে নিবে।
console.log(name.substring(4,20));

// যদিও ‍string কে array এর মত index দিয়ে মান পাওয়া যায় কিন্তু array এর মত pussh(), pop() কোন কিছুর মাধ্যমেই পরিবর্তণ করা যাবেনা। কারণ string কে বলা হয় imutable অর্থাৎ অপরিবর্তনীয়।