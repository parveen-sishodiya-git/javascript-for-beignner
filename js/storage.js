console.log("hi i will deal with storages");
console.log(localStorage);
localStorage.setItem('Name','Parveen');

localStorage.setItem('name','Parveen');

console.log(localStorage.getItem('Name'));
localStorage.removeItem('name');

let frontEndTechs = ['HTML','CSS','JS'];
console.log('Var = '+frontEndTechs+' '+typeof(frontEndTechs));

localStorage.setItem('techs',JSON.stringify(frontEndTechs));
let techvar = JSON.parse(localStorage.getItem('techs'));
console.log('Local Storage = '+ techvar+' '+typeof(techvar));