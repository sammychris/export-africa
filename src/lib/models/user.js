// models/user.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'exporter', 'admin'] },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exporter' }],
    profilePicture: { type: String }, // Store the URL or path to the profile picture
    location: { type: String },
    contactInfo: {
        email: { type: String },
        phone: { type: String },
        website: { type: String },
    },
    socialMedia: {
        facebook: String,
        twitter: String,
        linkedin: String,
        instagram: String,
    },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
