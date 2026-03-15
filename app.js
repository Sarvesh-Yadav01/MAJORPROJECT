const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing.js');

//connect to MongoDB or database
const MONGO_URL = 'mongodb://127.0.0.1:27017/Wanderlust';
main().then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

//create a home API
app.get('/', (req, res) => {
    res.send('Welcome to the Home API or root');
});

//create a listing route
app.get('/testListing', async(req, res) => {
    let sampleListing = new Listing({
        title: "My New Villa",
        description: "By the beach",
        price: 1300,
        location: "Calangute , Goa",
        country: "India",
    });
    await sampleListing.save();
    console.log("sample listing saved to database");
    res.send("successfully created a listing");
});

//creating a server
app.listen (8080, () => {
    console.log('Server is running on port 8080');
});

