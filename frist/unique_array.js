 const name = ['king','prince',
    'raja','raj','raj','king']


function noD(c){
    const newuni =[];
 for(const item of c){
    if(newuni.includes(item) === false){
        newuni.push(item);
    }
}
return newuni ;
}
const uniq = noD(name);
console.log(uniq);