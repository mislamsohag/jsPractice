
function recursion(props){
    // let sum=0;
    console.log(props);
    if(props==1){
        return 1;
    }
    let sum = props +recursion(props-1);
    return sum;
      
}

console.log(recursion(5))