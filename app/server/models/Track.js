const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrackSchema = new Schema({
    // track: {
        type: Object,
        name: { type: String, required: true },                     // .name     = ??
        author: { type: String },                                   // .author   = user.name
        size: { type: Number },                                     // .size     = e.total
        media: {
            result: { type: String, required: true },               // ..result  = e.target.result
            image: { type: String, default: '123' },                // ..image   = ??
            snippet: { type: String },                              // ..snippet = ??
        },
        dateRelease: { type: Date, default: Date.now }              // ....Date.now
    }
); 

// const UserSchema = new Schema({
//     user: { 
//         type: Object, 
//         name: { type: String, required: true },             // .name     = form on registration
//         login: { type: String, required: true },            // .login    = form on registration
//         password: { type: String, required: true },         // .password = form on registration
//         avatar: { type: String },                           // .avatar   = form on edit page
//         dateRegistration: { type: Date, default: Date.now } // ....Date.now
//     }
// });

module.exports = Track = mongoose.model('track', TrackSchema); 