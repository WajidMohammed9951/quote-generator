let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let btn = document.querySelector('.btn');

const url = "http://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
  .then ((data) => data.json())
  .then ((item) =>{
    quote.innerText = item.content;
    author.innerText = item.author;
  });
};


// window.addEventListener('click',getQuote);

btn.addEventListener('click',getQuote);