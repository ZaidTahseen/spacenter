const { json } = require('body-parser');
const mongoose = require('mongoose');
const { join } = require('path');

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    day: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required: true
    },
    massage: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('Appointment', AppointmentSchema);