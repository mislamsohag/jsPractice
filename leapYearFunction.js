function leapYearFunction (year){
    if((year%4==0)&&(year%100!=0)||(year%400==0)){
        return `${year}: is Leap Year`;
    }
    else return `${year}: is Not Leap Year`;
}


let leapYear = leapYearFunction(1998);
console.log(leapYear);


/*
A leap year is a year that contains an additional day, February 29th, making it 366 days long instead of the usual 365 days. Leap years are necessary to keep our calendar in alignment with the Earth’s revolutions around the Sun.

A year is a leap year if the following conditions are satisfied: 

The year is multiple of 400 and The year is a multiple of 4 but not a multiple of 100.

*/