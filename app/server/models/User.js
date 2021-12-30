const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserScema = new Schema({
        type: Object, 
        name: { type: String, required: true },             // .name     = form on registration
        login: { type: String, required: true },            // .login    = form on registration
        password: { type: String, required: true },         // .password = form on registration
        access: { type: String, default: 'defaultUser' },   // .access   = Guest/Admin/defaultUser/currentUser
        avatar: { type: String, default: 'defaultAvatar'},                           // .avatar   = form on edit page
        dateRegistration: { type: Date, default: Date.now } // ....Date.now
});
module.exports = User = mongoose.model('user', UserScema); 