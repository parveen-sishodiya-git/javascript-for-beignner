console.log("Hello i will present html templates");
let fruit = ['Orange','Apple','Guava'];
let name = 'Parveen Sishodiya';

let htmlTemplate = `<h1>Hi ${name}</h1>
                    <h3>I know you like ${fruit}</h3>`;

document.body.innerHTML = htmlTemplate;