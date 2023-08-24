function isLeapYear(year) {
    // const leapYear = year % 4;
    if ((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)) {
        return 'yes';
    } else {
        return 'no';
    }
}

const year = 2100;
const leapYear = isLeapYear(year);
console.log(year, 'Year is leap year?', leapYear);