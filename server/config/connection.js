const mongoose = require('mongoose');

//need to configure this with mongoose before we deploy
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://project3:babysteps@cluster0.ockyvl0.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;
