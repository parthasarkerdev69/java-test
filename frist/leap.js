// leap year
function isLeapYear(year){
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    if(year % 100 === 0 && 400 === 0){
        return true;
    }
    return false;
}
const isLipi = isLeapYear(2012);
console.log(isLipi);