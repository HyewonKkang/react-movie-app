const mongoose = require('mongoose');
const { Schema } = mongoose.Schema;


const favoriteSchema = mongoose.Schema({
    usefFrom: {
        type: Schema.Type.ObjectId,
        ref: 'User' // User.js에서 가져올 수 있음
    },
    movieId: {
        type: String
    },
    movieTitle: {
        type: String
    },
    moviePst: {
        type: String
    },
    movieRunTime: {
        type: String
    }
}, { timestamps: true })


const Favorite = mongoose.model('favorite', favoriteSchema);

module.exports = { Favorite }