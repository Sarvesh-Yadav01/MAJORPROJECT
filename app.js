const express = require('express');
const app = express();
const mongoose = require('mongoose');

//create a home API
app.get('/', (req, res) => {
    res.send('Welcome to the Home API or root');
});

//creating a server
app.listen (8080, () => {
    console.log('Server is running on port 8080');
});