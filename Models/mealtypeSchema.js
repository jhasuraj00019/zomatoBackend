const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mealtypeSchema = Schema({
    name: {
        type: String,
        required: true
    },
    mealtype: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('mealtypes', mealtypeSchema, 'mealtype')