const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userID: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bio: { type: String },
});

module.exports = mongoose.model('User', userSchema);
