const express = require('express');

// Create the Express app.
const app = express();

app.set('view engine', 'pug');

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

app.get('/', (req, res) => {
  res.send('Hello from Express!');
  console.log(`Request method: ${req.method}`);
	console.log(`Request path: ${req.path}`);
})

app.get(/xyz$/, (req, res) => {
  res.send("That's all I wrote.");
  console.log(`Request method: ${req.method}`);
	console.log(`Request path: ${req.path}`);
});
// /^\/\w+-*\w*\/\w+/gim;
app.get('/capital-letters/:letters', (req, res) => {
  res.send(req.params.letters.toUpperCase());
  console.log(`Request method: ${req.method}`);
	console.log(`Request path: ${req.path}`);
});

app.get('/margot/:letters', (req, res) => {
  const word = capitalizeFirstLetter(req.params.letters)
	res.send(word);
	console.log(`Request method: ${req.method}`);
	console.log(`Request path: ${req.path}`);
});

app.get('/margeaux/:letters', (req, res) => {
	const word = capitalizeFirstLetter(req.params.letters);
	res.send(word);
	console.log(`Request method: ${req.method}`);
	console.log(`Request path: ${req.path}`);
});

app.all(/^\/[a-zA-Z-_]+$/, (req, res) => {
  // res.send('That\'s all I wrote.');
  console.log(`Request method: ${req.method}`);
	console.log(`Request path: ${req.path}`);
  const pageData = {
    title: 'Welcome',
  heading: 'Home',
  method: req.method,
  path: req.path,
  randomNumber: 9
   };
  res.render('layout', pageData);
})

app.all('/about2', (req, res) => {
	// res.send('That\'s all I wrote.');
	console.log(`Request method: ${req.method}`);
	console.log(`Request path: ${req.path}`);
	const pageData = {
		title: 'Welcome',
		heading: 'Home',
		method: req.method,
		path: req.path,
		randomNumber: 9,
	};
	res.render('layout', pageData);
})

const port = 8081


app.listen(port, () => console.log(`Listening on port ${port}...`));
