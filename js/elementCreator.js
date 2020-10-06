console.log("Hi i will create elements");

/*
Element append
*/

// create one element
let dynamicElement = document.createElement("h1");

// created texxt for the same Element
let text = document.createTextNode('I am dynamic text node');

//setted different elements properties
dynamicElement.appendChild(text);
dynamicElement.className = 'name';
dynamicElement.id='did';
dynamicElement.setAttribute('a','b');
dynamicElement.setAttribute('style','color:red;font-size:5em');

//element with which we will append our element
let parentElement = document.querySelector('#maindiv');
parentElement.appendChild(dynamicElement);
// console.log(parentElement);
// console.log(dynamicElement);


/*
Element replacement
*/

let replaceEle = document.createElement('h6');
replaceEle.id='reId';
replaceEle.innerHTML = '<b>Hi i am replacement for "I am h2" element</b>';
console.log(replaceEle);

let replaceMe = document.getElementById('replaceme');
console.log(replaceMe);

replaceMe.replaceWith(replaceEle);



