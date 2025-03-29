const array = [2, 3, 4 , 5 ,6 ,7];

console.log(array);

console.log(array.length);
console.log(array[0]);
array.push(55)
console.log(array);
const out =array.pop();
console.log(out);



// shift 
const ar =[44,66,77,88,99];
array.shift();
console.log(ar);
array.unshift("add");
console.log(ar);
// include
const friends = ['rafi','shovon','sayed'];
console.log(friends.includes("rafi"));
console.log(friends.includes("shovon"));
if (friends.includes('rafi')) {
    console.log("ifter khabo");
}
else{
    console.log("khabo na");
}
var plus = ar.concat(friends);
console.log(plus);