const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const port = 3000;

// Define the paths to images and data directories
const imagesDirectory = path.join(__dirname, 'static', 'images');
const articlesPath = path.join(__dirname, 'static', 'data', 'articles.json')

// Endpoint to retrieve the list of images with article associations
app.get('/images', (req, res) => {
  // Read the list of articles from the data directory
  const articles = getArticles();

  // Read the list of images from the images directory
  const images = getImages();

  // Associate each image with an article
  const imageList = images.map((image, index) => ({
    image,
    article: articles[index % articles.length], 
  }));

  // Send the response
  res.json(imageList);
});

// Function to get the list of articles from the articles.json file
function getArticles() {
  const articlesData = fs.readFileSync(articlesPath, 'utf-8');
  return JSON.parse(articlesData);
}

// Function to get the list of images from the images directory
function getImages() {
  return fs.readdirSync(imagesDirectory);
}

// // Serve static files
// app.use(express.static(path.join(__dirname, 'static')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default {
  path: '/api',
  handler: app
}