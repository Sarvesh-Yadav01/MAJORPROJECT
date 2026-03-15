const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    
    description: {
        type: String,
        required: true
    },
    
image: {
        url: {
            type: String,
            default: "https://unsplash.com/photos/palm-tree-on-beach-shore-during-sunset-Fz0XVa_rLQI"
        },
        filename: {
            type: String,
            default: "listingimage"
        }
    },
    price: Number,
    location: String,
     
    country: String,

});
        
const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;