// Create web server
// Import express and body-parser
const express = require('express');
const bodyParser = require('body-parser');
const Comments = require('./model/comments');
const cors = require('cors');

// Create express app
const app = express();

// Use body-parser
app.use(bodyParser.json());

// Use CORS
app.use(cors());

// Create a new Comments
app.post('/comments', (req, res) => {
  Comments.create({
    message: req.body.message});
    
