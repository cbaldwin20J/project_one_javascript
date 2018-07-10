

// The object literals of quotes
var quotes = [
	{
	quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
	source: "Dr. Suess",
	citation: "",
	year: "",
	tags: ['inspiring', 'love', 'happy']
	},

	{
	quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
	source: "Marilyn Monroe",
	citation: "",
	year: "",
	tags: ['funny', 'relationships']
	},

	{
	quote: "Get busy living or get busy dying.",
	source: "Stephen King",
	citation: "",
	year: "",
	tags: ['inspiring', 'motivation']
	},

	{
	quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
	source: "Helen Keller",
	citation: "book: We Bereaved",
	year: "1929",
	tags: ['inspiring', 'motivation', 'life']
	},

	{
	quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
	source: "H. Jackson Brown’s mother",
	citation: "page 13 in Brown’s book: P.S. I Love You: When Mom Wrote, She Always Saved the Best for Last.",
	year: "1991",
	tags: ['life', 'motivation']
	}

];


// Gets a random object literal from the 'quotes' array.
function getRandomQuote() {
	current = document.querySelector('.quote');
	while (true) {
		var newQuoteNum = Math.floor(Math.random() * (quotes.length));
		if (current && quotes[newQuoteNum]['quote'] != current.innerText) {

			break;
		}else if (!current) {
			break;
		}
	};
	return quotes[newQuoteNum];
};

// Gets a random rgba color value
function getRandomColor() {
	num1 = Math.floor(Math.random() * 256);
	num2 = Math.floor(Math.random() * 256);
	num3 = Math.floor(Math.random() * 256);
	color_html = 'rgba(' + num1 + ',' + num2 + ',' + num3 + ')';
	return color_html
}

// Gets the quote object literal and turns it into paragraph tags
// to be put into the dom html. Also changes the background color.
function printQuote() {
	background_color = getRandomColor();
	the_quotes_object = getRandomQuote();
	the_html = '<p class="quote">' + the_quotes_object['quote'] + '</p>';
    the_html +=  '<p class="source">' + the_quotes_object['source'];
    if (the_quotes_object['citation']) {
    	the_html += '<span class="citation">' + the_quotes_object['citation'] + '</span>';
    } 
    if (the_quotes_object['year']) {
    	the_html += '<span class="year">' + the_quotes_object['year'] + '</span>';
    }
    
    var tags = the_quotes_object['tags'].join(', ');
    the_html += '<span class="tags">tags: ' + tags + '</span></p>';

    document.getElementById('quote-box').innerHTML = the_html;
    document.body.style.backgroundColor = background_color;
};


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// When the app first loads, we call printQuote so it loads a quote.
printQuote();

// Will change the quote every 30 seconds.
window.setInterval(printQuote, 30000);
