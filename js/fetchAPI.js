console.log("Today we will see fetch api");

//Getting data by JS fetch API

let fetchButton = document.getElementById("fetchButton");

fetchButton.addEventListener("click",getData);

function test(params) {
    console.log('testing')
}

async function getData() {
    let varr = await test();
    console.log("fetching data");
    let url = 'https://api.github.com/users';
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    })
}


//Posting data to the API using JS Fetch API

document.getElementById('postButton').addEventListener('click',postData);

/*
Test 607


*/


function postData() {
    console.log('Posting data');
    let url = 'http://dummy.restapiexample.com/api/v1/create';
    let data = '{"name":"Test","salary":"123","age":"23"}';
    let reqdata = {
        'method':'post',
        'header':{
            'content-type':'application/json'
        },
        'body':data 
    };
    fetch(url,reqdata).then((response)=> response.json()).then((data)=>console.log(data));
}

