const mongoose = require('mongoose');

//need to configure this with mongoose before we deploy
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/babysteps');

module.exports = mongoose.connection;
