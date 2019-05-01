const mongoose = require('mongoose');
const Schema = mongoose.Schema();

let UserSchema = new Schema({
    firstname: String,
    lastname: String,
    birthDate: Date,
    email: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);
