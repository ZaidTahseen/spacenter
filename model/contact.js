const { json } = require('body-parser');
const mongoose = require('mongoose');
const { join } = require('path');

const Schema = mongoose.Schema;

const contactSchema = new Schema(  {

    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },

    message: {
        type: String,
        required: true
    },

});


module.exports = mongoose.model('Contact', contactSchema);

