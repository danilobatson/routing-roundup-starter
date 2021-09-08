const express = require('express');

// Create the Express app.
const app = express();

app.all('*', (req, res) => {
	res.send('Hello from Express!');
});

const port = 8081
