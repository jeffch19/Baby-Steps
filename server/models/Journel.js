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
        type: Data
    },
    image: {
        type: String
    },
    trimester: {
        type: String
    },
    month: {
        type: String
    }
});

const Journel = mongoose.model('Journel', journelSchema)

module.exports = Journel;