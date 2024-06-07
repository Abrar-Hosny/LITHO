

var  quote =document.getElementById("quote");
var author =document.getElementById("author");
console.log(quote , author)
console.log()
var quoteList=[
{name:"“Be the change that you wish to see in the world.”" , Author:"Mahatma Gandhi"},
{name:"“Be yourself; everyone else is already taken.”" , Author:"Oscar Wilde"},
{name:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" , Author:"Albert Einstein"}

]



function generateQuote(){
    var randomnum=[]
    var randomNumber = Math.floor(Math.random()*4)    
    quote.innerText=quoteList[randomNumber].name;
    author.innerText=quoteList[randomNumber].Author;

}

    

