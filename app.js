const express = require('express');

// Create the Express app.
const app = express();

app.set('view engine', 'pug');

app.all('*', (req, res) => {
	// res.send('Hello from Express!');
  console.log(`Request method: ${req.method}`);
	console.log(`Request path: ${req.path}`);


  const pageData = {
    title: 'Welcome',
  heading: 'Home',
  method: 'GET',
  path: '/',
  randomNumber: '9'
   };

   res.render('layout', pageData);
});



const port = 8081


app.listen(port, () => console.log(`Listening on port ${port}...`));
