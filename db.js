const mongoose = require('mongoose');
require('dotenv').config();

// define the mongoDB connection URL
const mongoURL = process.env.MONGODB_URL;
// const mongoURL = process.env.MONGODB_URL_LOCAL;

// set up mongoDB connection
mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})

// get the default connection
// mongoose maintains a default connection object representing the mongoDB connection
const db = mongoose.connection;

// define event listeners for database connection
db.on('connected', ()=> {
    console.log('Connected to MongoDB server');
    
});

db.on('error', (err) => {
    console.log('MongoDB connection error: ', err);
    
});

db.on('disconnected', () =>{
    console.log('MongoDB disconnected');
});

// export the database connection 
module.exports = db;