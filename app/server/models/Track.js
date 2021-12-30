const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrackSchema = new Schema({
    // track: {
        type: Object,
        name: { type: String, required: true },                     // .name     = ??
        author: { type: String },                                   // .author   = user.name
        // authorId: { type: String },
        size: { type: Number },                                     // .size     = e.total
        access: {
            admin:       { type: Boolean, default: true },
            guest:       { type: Boolean, default: false },
            currentUser: { type: Boolean, default: true }
        },     
        media: {
            result: { type: String, required: true },               // ..result  = e.target.result
            image: { type: String },                                // ..image   = ??
            snippet: { type: String },                              // ..snippet = ??
        },
        dateRelease: { type: Date, default: Date.now }              // ....Date.now
    }
); 
module.exports = Track = mongoose.model('track', TrackSchema); 