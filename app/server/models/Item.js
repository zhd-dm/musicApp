const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    track: {
        type: Object,
        result: {
            type: String,
            required: true
        },
        name: {
            type: String
        },
        size: {
            type: Number
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
}); 

module.exports = Item = mongoose.model('item', ItemSchema); 