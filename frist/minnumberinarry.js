const choto = [65,80,70,44,33,87,2]

function getMin(number){
    let min = number[0];
    for(const num of number){
        if (num < min) {
            min = num;
        }
    }
    return min;
}
const max = getMin(choto);
console.log(min);