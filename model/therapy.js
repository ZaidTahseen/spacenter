const { json } = require('body-parser');
const mongoose = require('mongoose');
const { join } = require('path');

const Schema = mongoose.Schema;

const therapySchema = new Schema({

    name: {
        type: String,
        required: true
    },

    number: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },


    gifting: {
        type: String,
        required: true
    },
    therapy: {
        type: String,
        required: true
    },

});
module.exports = mongoose.model('Therapy', therapySchema);

