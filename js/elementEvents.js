console.log("We will handle with ");


// let element = document.getElementById('pickMe'); 
// console.log(element);
// element.addEventListener('click',function(e){
//     console.log('the element(pickme1) is clicked');
//     console.log(e.target.className);
//     console.log(e.target.innerHTML);
//     console.log(e.offsetY);
// });


// let element1 = document.getElementById('btn'); 
// console.log(element1);
// element1.addEventListener('mousemove',function(){
//     console.log('Mouse is moving');
// });


// document.getElementById('btn').addEventListener('mouseenter',func);
// function func(e) {
//     console.log("Mouse is entered");
//     e.preventDefault();
// }

//cool thing
document.getElementById('container').addEventListener('mousemove',mousemovefunc);
function mousemovefunc(e){
    document.body.style.backgroundColor=(`#${e.offsetX}${e.offsetY}0`);
    console.log(e.offsetX,' ',e.offsetY);
    //console.log(e.target);
}

