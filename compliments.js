// Uses the https://favqs.com/api to fetch for quotes
var quoteBody = 'Have a great day!';
var quoteAuthor = "";
const userAction = async () => {
  const response = await fetch('https://favqs.com/api/qotd');
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
 quoteBody = Object.values(myJson)[1].body;
 quoteAuthor = Object.values(myJson)[1].author;
 document.getElementById("compliments").innerHTML = quoteBody;
 document.getElementById("author").innerHTML = ("- ").concat(quoteAuthor);
  //console.log(Object.values(myJson)[1]);
}
userAction()
