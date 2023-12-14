var new_quote = document.getElementById("new_quote");
var quote = document.getElementById('quote');
var author = document.getElementById('author');
var twitter = document.getElementById('twitter')
var quotes = [];
var random = 0;

new_quote.addEventListener('click', bindQuotes);

async function getQuotes() {
    const quote_res = await fetch('https://codewithkg.github.io/quotes-list/inspirational_quotes.json');
    quotes = await quote_res.json()


    bindQuotes();
}

function bindQuotes() {
    random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].text;
    author.innerHTML = quotes[random].author;
}

twitter.addEventListener('click', function () {
    window.open(`https://twitter.com/intent/tweet?text=${quotes[random].text} - ${quotes[random].author}`)
})



getQuotes();