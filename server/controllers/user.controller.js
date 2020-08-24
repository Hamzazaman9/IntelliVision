var mongoose = require('mongoose');
var passport = require('passport');
var User = mongoose.model('User');
var _ = require('loadsh');
var bcrypt = require('bcryptjs');




module.exports.register = async (req, res, next) => {
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.subscription = req.body.subscription;
    user.save((err, doc) => {
        if(!err){
            res.send(doc);
        }
        else{
            if(err.code == 11000){
                res.status(422).send(['The email is already registered!']);
            }
            else{
                return next(err);
            }
        }
    })
}

module.exports.authenticate = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err){
            return res.status(400).json(err);
        }
        else if(user){
            return res.status(200).json({ "token": user.generateJwt() });
        }
        else{
            return res.status(400).json(info);
        }
    })(req, res);
}

module.exports.userProfile = (req, res, next) => {
    User.findOne({ _id: req._id }, (err , user) => {
        if(!user){
           return res.status(404).json({ status: false, message: 'User record not found.' });
        }
        else{
            return res.status(200).json({ status: true, user: _.pick(user,['firstName', 'lastName', 'email']) })
        }
    })
}

module.exports.update = (req, res, next) => {
            return res.status(400).json({ status: true, message: 'User record succesfully updated.' });
}