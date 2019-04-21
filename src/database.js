const mongoose = require("mongoose");
const config = require('config');

// DB Config
const db = config.get('mongoURI');

mongoose.connect(db, { 
        useNewUrlParser: true
    })
    .then(console.log("Database is connected"))
    .catch(err => {console.log(`Database error: ${err}`)});