/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/*  Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing
    I am keeping this study guide attached to this code in case I want to refer to it.

*/

//     Array of quotes that I selected.


var quotes = [
    {
      quote: "My life is my message.", 
      source: "Mahatma Gandhi"
  },
    {
      quote: "The wisest man has something yet to learn.", 
      source: "George Santanaya"
  },
    {
      quote: "Optimism is the faith that leads to achievement.",
      source: "Hellen Keller"
  },
    {
      quote: "A good compromise is one where everybody makes a contribution.",
      source: "Angela Merkel",
      year: "2017"
  },
    {
      quote: "Each day provides its own gifts.",
      source: "Marcus Aurelius"
  }
]
 


/*
   `getRandomQuote` is used here to generate a random number.
   Random number is used to `return` a random quote object from the 
     `quotes` array.
*/

function getRandomQuote(array) {
  var quoteIndex = Math.floor (Math.random () * (quotes.length));
  for (var i = 0; i < array.length; i++) {
    var randomQuote = array [quoteIndex];
      }
  return randomQuote;
}


/*
 `printQuote` function is used to call the `getRandomQuote` function and assign it to a variable.
   Used the properties of the quote object stored in the variable to 
     create HTML string.
   Used conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   Used the `innerHTML` of the `quote-box` div to the HTML string.
*/

function printQuote() {
  var message = " ";
  var result = getRandomQuote (quotes);
  message = "<p class ='quote'>" + result.quote + "</p>";
  message += "<p class = 'source'>" + result.source;
  message += "<span class = 'year'>" + result.year + "</span>";
  message += "</p>";

  document.getElementById('quote-box').innerHTML = message;
}

printQuote();





/*
  "Show another quote" button is used to allow the event listener 
  to call the `printQuote' function.
*/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


