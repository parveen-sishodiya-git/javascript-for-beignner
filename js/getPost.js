console.log("Hello today we will use js objects");


let fetchbtn = document.getElementById("fetchButton");
let postButton = document.getElementById("postButton");

fetchbtn.addEventListener("click", fetchButtonClicked);
postButton.addEventListener("click", postButtonClicked);

function postButtonClicked(params) {
    console.log("POST BUTTON CLICKED");

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader('content-type', 'application/json');

    xhr.onload = function () {
        console.log(this.status);
        console.log(this.responseText);
        
        setTimeout(() => {
            document.getElementById("postButton").disabled=false;
            document.getElementById("postLoader").innerHTML =
            ` `;
        }, 5000);
        
        console.log("PROCESSED");
    

        
    }

    xhr.onprogress = function () {
        document.getElementById("postButton").disabled=true;
        document.getElementById("postLoader").innerHTML =
            ` <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`;
            console.log("PROCESSING...");
    }

    params = `{"title": "foo","body": "bar","userId": 1}`;

    xhr.send(params);

}

function fetchButtonClicked(params) {
    console.log("Fetched button clicked");

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

    xhr.onprogress = function () {
        document.getElementById("fetchLoader").innerHTML =
            ` <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`;
    }

    xhr.onload = function () {
        // console.log(this.responseText);
        let fobj = JSON.parse(this.responseText);
        let html = "";
        for (key in fobj) {
            // console.log(fobj[key]);
            html += `<tr>
                     <th scope="row">${fobj[key].userId}</th>
                         <td>${fobj[key].id}</td>
                         <td>${fobj[key].title}</td>
                         <td>${fobj[key].completed}</td>
                     </tr>`;
        }

        document.getElementById("fetchedDT").innerHTML = html;
        document.getElementById("fetchLoader").innerHTML = "";

    }

    xhr.send();

}