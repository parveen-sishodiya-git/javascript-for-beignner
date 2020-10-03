var jsOld = 'hello i am old js variable convention';
var jsOld = 'ramesh';
console.log(jsOld);

const constantVar = 88;
// const constantVar =7;
console.log(constantVar);

{
    let constantVar = 7;
    // let constantVar = 7;

    console.log(constantVar);
}

console.log(constantVar);

var array = [1,2,3,4,3,2];
array = [6];
console.log(array);

const constArray = [1,'g',[99,88,77],2,3,4]; //we can't reassign const array like constArray=[something] but we can do all operation
constArray.push(44);
constArray.pop();
constArray.pop();
console.log(constArray);

{
let constArray = [9]; //let ables us copy a global variable in local block
constArray.push(44);
console.log(constArray);
}