// leap year
function isLeapYear(year){
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else{
        return false;
    }
}
const isLipi = isLeapYear(2012);
console.log(isLipi);