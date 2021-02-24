const { json } = require('body-parser');
const mongoose = require('mongoose');
const { join } = require('path');

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    
    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
       default:'admin',
    },

});


module.exports = mongoose.model('User', UserSchema);