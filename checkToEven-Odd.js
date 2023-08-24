

 const checkEvenOrOdd=(prop)=>{
    if(prop%2==0){
        return "This is Even Number = "+prop;
    }
    else if(prop%2==1){
        return "This is Odd Number = "+prop;
    }
    else{
        return "something is wrong";
    }
    // return prop;
}

// const result1=checkEvenOrOdd(25);

console.log(checkEvenOrOdd(35));

