const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Define the port, or use 3000 by default

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Serve the index.html file for all requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});