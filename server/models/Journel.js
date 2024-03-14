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
        type: String,
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
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Journel = mongoose.model('Journel', journelSchema)

module.exports = Journel;