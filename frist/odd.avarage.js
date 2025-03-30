function oddAvarage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 ===1){
            // console.log(number);
            odds.push(number);
        }
    }
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum ,count);
    const avg = sum / count ;
    return avg;
}
const number =[43,13,58,81]
const avg = oddAvarage(number);
console.log(avg);