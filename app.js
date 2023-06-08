// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on a port
const port = 3000; // You can change this to any available port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});