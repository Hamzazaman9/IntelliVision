require('./config/config.js');
require('./models/db');
require('./config/passportConfig');


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var rtsIndex = require('./routes/index.router');
var passport = require('passport');
require('./config/passportConfig');


var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);
app.use((err, req, res, next) => {
    if(err.name === 'ValidationError'){
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
})

app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}` ));
