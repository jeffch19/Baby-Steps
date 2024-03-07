const mongoose = require('mongoose');

const { Schema } = mongoose;

const journelSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    image: {
        type: String
    },
    trimester: {
        type: String
    },
    month: {
        type: String
    },
    babyWeight: {
        type: Number
      }
});

const Journel = mongoose.model('Journel', journelSchema)

module.exports = Journel;