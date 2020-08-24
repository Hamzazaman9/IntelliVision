const mongoose = require('mongoose');
require('./user.model')

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err){
        console.log('Connection Successful');
    }
    else{
        console.log('Error in mongodb connection : ' + JSON.stringify(err, undefined, 2))
    }
});