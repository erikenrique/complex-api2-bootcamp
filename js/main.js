// import { soccerApiKey } from "./apiKeys.js";

/* 
let namsorApiKey = '1d9e3aef906fe6e53daace685e6210d3'
try to get origin/diaspora of name 
*/

document.querySelector('button').addEventListener('click', doAThing);

function doAThing() {
    let name = document.querySelector('input').value
    let urlNameAge = `https://api.agify.io?name=${name}`;

    fetch(urlNameAge)
        .then(res => res.json())
        .then(dataAgify => {
            document.querySelector('h4').innerText = `Your predicted age for your name ${dataAgify.name} is ${dataAgify.age}`
            return fetch(`https://api.adviceslip.com/advice/${dataAgify.age}`)
        })
        .then(res => res.json())
        .then(dataAdviceSlip => {
            document.querySelector('h2').innerText = `Your quote: ${dataAdviceSlip.slip.advice}`
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
}

/*
function doAnotherThing() {
    let name = document.querySelector('input').value
    let urlNamsor = `https://v2.namsor.com/NamSorAPIv2/api2/json/diasporaFullBatch`;

    fetch (urlNamsor, {
        "method": "POST",
        "headers": {
            "X-API-KEY": "1d9e3aef906fe6e53daace685e6210d3",
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
        "personalNames": [
            {
            "name": name,
            "countryIso2": "US"
            }
        ]
        })
    })
        .then(res => res.json())
        .then(dataNamsor => {
            console.log(dataNamsor.personalNames[0])
        })
}

*/