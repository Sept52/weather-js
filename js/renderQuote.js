"use strict"

const btn = document.querySelector('.change-quote');
let quoteEl = document.querySelector('.quote');
let authorEl = document.querySelector('.author');

funcc();


async function funcc() {
    const response = await fetch("https://run.mocky.io/v3/5b094d60-ceb2-4e6a-9f8f-5417f3e7ccb1");
    const quotesArray = await response.json();
    renderArray(quotesArray);
    
}

function renderArray(quotesArray) {
    const randomQuotes = Math.floor((Math.random() * 13));
    quoteEl.innerText = quotesArray[randomQuotes].quote;
    authorEl.innerText = quotesArray[randomQuotes].author;
}

btn.addEventListener('click', funcc)
