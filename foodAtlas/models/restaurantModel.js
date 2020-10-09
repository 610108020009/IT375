const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
id: Number,
name: String,
imageURL: String,
type: String
});

const Restaurant = mongoose.model('Restaurant',restaurantSchema);

module.exports = Restaurant;