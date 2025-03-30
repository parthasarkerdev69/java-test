function inchToFeet2(inch){
    const feetFraction = inch /12 ;
    const feetNumber = parseInt(feetFraction) ;
    const inchRemain = inch % 12 ;
    const result = feetNumber + "ft " + inchRemain + 'inch';
    return result;

}
const paHeight =inchToFeet2(75);
console.log(paHeight);