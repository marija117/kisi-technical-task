const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
