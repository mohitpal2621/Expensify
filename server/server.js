const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Define the port, or use 3000 by default

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});