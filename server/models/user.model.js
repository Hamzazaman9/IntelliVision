var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const passport = require('passport');

var userSchema = new mongoose.Schema({
        firstName: {
            type: String,
            required: 'Full name can\'t be empty'
        },
        lastName: {
            type: String,
            required: 'Username can\'t be empty'
        },
        email: {
            type: String,
            required: 'Email can\'t be empty',
            unique: true
        },
        password: {
            type: String,
            required: 'Password can\'t be empty'
        },
        subscription: {
            type: String,
            required: 'Select a subscription type'
        }
    });

    userSchema.path('email').validate((val) => {
        emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(val);
    }, 'Invalid e-mail.');

    userSchema.methods.verifyPassword =  function(password){
        return (password == this.password);
    }

    userSchema.methods.generateJwt = function(){
      return jwt.sign({ _id: this._id },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXP
        });
    }

mongoose.model('User', userSchema);