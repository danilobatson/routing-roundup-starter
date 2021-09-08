const express = require('express');

// Create the Express app.
const app = express();

app.set('view engine', 'pug');



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

app.get(/^\/\w+-*\w*\/\w+/img, (req, res) => {
  const test = req.path
  const wordSplit = test.split("/")
  console.log(wordSplit[2])
  res.send(wordSplit[2].toUpperCase());

  console.log(`Request method: ${req.method}`);
	console.log(`Request path: ${req.path}`);
});





// /capital-letters/abc
// 1) should return the plain text response "ABC"

// /capital-letters/asdf
// 2) should return the plain text response "ASDF"

// /margot/bio
// 3) should return the plain text response "Bio"

// /margot/contact
// 4) should return the plain text response "Contact"

// /margeaux/bio
// 5) should return the plain text response "Bio"

// /margeaux/contact
// 6) should return the plain text response "Contact"

app.all(/^\/[a-zA-Z-_]+$/ig, (req, res) => {
  // res.send('That\'s all I wrote.');
  console.log(`Request method: ${req.method}`);
	console.log(`Request path: ${req.path}`);
  const pageData = {
    title: 'Welcome',
  heading: 'Home',
  method: `${req.method}`,
  path: `${req.path}`,
  randomNumber: 9
   };
  res.render('layout', pageData);
})

// 1) /capital-letters/abc
// should return the plain text response "ABC":
// /capital-letters/asdf
// /margeaux/bio
// /margeaux/contact

// app.get('/about_xyz', (req, res) => {
//   res.send('That\'s all I wrote.');
//   console.log(`Request method: ${req.method}`);
// 	console.log(`Request path: ${req.path}`);
// })

// app.get('/about-xyz', (req, res) => {
//   res.send('That\'s all I wrote.');
//   console.log(`Request method: ${req.method}`);
// 	console.log(`Request path: ${req.path}`);
// })


// app.all('*', (req, res) => {
// 	res.send('Hello from Express!');
//   console.log(`Request method: ${req.method}`);
// 	console.log(`Request path: ${req.path}`);
// });



const port = 8081


app.listen(port, () => console.log(`Listening on port ${port}...`));
