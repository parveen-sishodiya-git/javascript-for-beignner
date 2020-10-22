console.log("hello we will see callback here");


let xhr = new XMLHttpRequest();

xhr.open("GET","https://045bade5-22e1-435f-b909-fce55c0f0d10.mock.pstmn.io/api/v1/users/gts_recommended_job/user_id/1",true);

xhr.onprogress = function () {
    console.log("processing");
}

xhr.onload = function(){
    console.log("Fatched now showing below");
    console.log(this.responseText);
}

xhr.send();