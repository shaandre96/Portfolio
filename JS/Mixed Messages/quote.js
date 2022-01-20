import fetch from "node-fetch";

const api_url = "https://zenquotes.io/api/quotes";

async function getapi(url){
    const response = await fetch(url);
    var data = await response.json();
    return data;
    };

var quotes = await getapi(api_url);

const displayRandomQuote = arr =>{
    var randIndex = Math.floor(Math.random() * arr.length-1);
    var obj = arr[randIndex];
    console.log(`${obj.q} \n - ${obj.a}`);
}

displayRandomQuote(quotes);