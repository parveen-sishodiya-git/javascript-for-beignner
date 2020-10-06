console.log('Learning Variable scopes');

/* 
after ES6 version of javascript:
    there are three variable types we can make
    1- var
    2- let
    3- const

    imp points:
     * if we printing 
*/

//name  =  'Ramesh'; // if we dont specify any variable type then bydefault it take 'var'

//variable1
//suppose we have two things one variable and one function after print statement of that valiable

console.log(variable1);
name = 'Hati bhai'
console.log('******* name ' +  name);
//second function
function variable1(){
    console.log('I am variable1 function'+name);
}


let value = 3;

console.log("hello value  = " + value);

{
    let  value= 5;
    console.log("block value  = " + value);
}

console.log("hello value  = " + value);

// var variable1 = 'Rajesh';