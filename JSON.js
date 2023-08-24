//  JSON = Java Script Object Notation 

const user={
    id:1,
    name:'sohag',
    address:'Narayongonj',
    phone:8801812016163,
    email:'mislamsoahg@gmail.com',
}
const sohag={
    id:1,
    name:'sohag',
    address:{
        vill: 'Rajapur',
        Po:'Khil Para',
        Ps: 'Hazigonj',
        Dist: 'Chandpur'
    },
    phone:8801812016163,
    email:'mislamsoahg@gmail.com',
}
const sohagJSON=JSON.stringify(sohag);
console.log(sohagJSON);

const sohagPars=JSON.parse(sohagJSON);
console.log(sohagPars);



