const mongoose = require('mongoose');
const shortid = require('shortid');

const poemModel = mongoose.model('poem', new mongoose.Schema({
    id: { type: String, default: shortid.generate() },
    ownId: String,
    tags: [],
    poet: String,
    likes: Number,
    views: Number,
    title: String,
    author: String,
    categories: String
}));

module.exports = poemModel;