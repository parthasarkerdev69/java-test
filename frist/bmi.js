const weight = 80;
const height = 2;
const  m = height * height;

const BMI = (weight/m);
console.log('your BMI is  '+ BMI );

if(BMI <18.5){
    console.log('Your are underweight :>> ');
}
else if(BMI >= 18.5 && BMI <= 24.9){
    console.log('You are normal');
}
else if (BMI >= 25 && BMI <= 29.9){
console.log(' You  are overweight ' );
}
else{
    console.log('You are obese ');
}
