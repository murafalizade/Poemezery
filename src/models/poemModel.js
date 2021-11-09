const mongoose = require('mongoose');
const shortid = require('shortid');

const poemModel = mongoose.model('poem', new mongoose.Schema({
    id: { type: String, default: shortid.generate() },
    ownId: String,
    tags: [],
    poet: String,
    likes: {type:Number,default:0},
    align: {type:String,default:'center'},
    backgroundImg:String,
    views: {type:Number,default:0},
    title: String,
    author: String,
    category: String,
    language: String

}));

module.exports = poemModel;