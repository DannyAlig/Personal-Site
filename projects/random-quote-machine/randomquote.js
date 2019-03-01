
let quoteIndex= [ 
    {
        quote: "When the student is ready, the master will appear.",
        author: "Unattributed"
    },
    {
        quote:"The psychotic drowns in the same waters in which the mystic swims with delight.",
        author:"Joseph Campbell"
    },
    {
        quote: "Travel is fatal to prejudice, bigotry, and narrow-mindedness.",
        author: "Mark Twain"
    },
    {
        quote: "We must free ourselves of the hope that the sea will ever rest. We must learn to sail in high winds.",
        author: "Aristotle Onassis"

    },
    {
        quote: "Welcome to the Jungle!",
        author: "Axl Rose"
    },
    {
        quote: "Heros get remembered, but legends never die. Follow your heart kid and you can never go wrong.",
        author: "Spirit of Babe Ruth in <i>The Sandlot</i>"
    },
    {
        quote: "If you are working on something exciting that you really care about, you don't have to be pushed. The vision pulls you.",
        author: "Steve Jobs"
    },
    {
        quote: "A pessimist sees difficulty in every opportunity, an optimist sees opportunity in every difficulty.",
        author: "Winston Churchill"
    },
    {
        quote: "It does not take a majority to prevail... but rather an irate, tireless minority, keen on setting brushfires of freedom in the minds of men.",
        author: "Samuel Adams"
    },
    {
        quote: "All truth passes through three stages. First, it is ridiculed. Second, it is violently opposed. Third, it is accepted as being self-evident.",
        author: "Arthur Schopenhauer"
    },
    {
        quote:"There is a principle which is a bar against all information, which is proof against all arguments and which cannot fail to keep a man in everlasting ignorance. That principle is contempt prior to investigation.",
        author: "Herbert Spencer"
    },
    {
        quote: 'It is astonishing how short a time it can take for very wonderful things to happen.',
        author: 'Unknown'
    },
    {
        quote: "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
        author: "Ernest Hemingway"
    },
    {
        quote: "Be a loner. That gives you time to wonder, to search for the truth. Have holy curiosity. Make your life worth living.",
        author: "Albert Einstein"
    },
    {
        quote: "Don't burn your opportunities for temporary comfort. Free yourself.",
        author: "Unknown"
    },
    {
        quote: "An intelligent person does not need the promise of heaven to see the merit of good deeds.",
        author: "Unknown"
    },
    {
        quote: "You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete.",
        author: "R. Buckminster Fuller"
    },
    {
        quote: "The stock market is a device for transferring money from the impatient to the patient.",
        author: "Warren Buffett"
    }

];

var currentQuote;
var currentAuthor;
const w = quoteIndex.length;
var randoIndex;
var memIndex=10000;
var currentTweetHref= "";

function randomQuoteGen (){
    let rando =  Math.floor(w*(Math.random()));
    if (rando===memIndex){
        rando += 1;
    } else {
        rando = rando;
    }

    randoIndex=rando;
    memIndex=randoIndex;

    currentQuote = '"'+quoteIndex[randoIndex].quote+'"';
    currentAuthor = "- "+quoteIndex[randoIndex].author;
    currentTweetHref = 'https://twitter.com/intent/tweet?hashtags=quotes&text='+currentQuote+" "+currentAuthor;
    
}

randomQuoteGen();


window.onload = function() {

    document.getElementById("author").innerHTML=currentAuthor;
    document.getElementById("text").innerHTML=currentQuote;
    document.getElementById('tweet-quote').href = currentTweetHref;
} 


function newQuote(){
    randomQuoteGen();
    document.getElementById("author").innerHTML=currentAuthor;
    document.getElementById("text").innerHTML=currentQuote;
    document.getElementById('tweet-quote').href = currentTweetHref;
}
