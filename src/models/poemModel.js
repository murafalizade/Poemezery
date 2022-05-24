const mongoose = require('mongoose');
const shortid = require('shortid'); 

const poemSchema =  new mongoose.Schema({
    id: { type: String, default: shortid.generate() },
    ownId: String,
    owner: String,
    tags: [],
    poet: String,
    poetHTML: String,
    likes: [],
    align: {type:String,default:'center'},
    backgroundImg:String,
    views: {type:Number,default:0},
    title: String,
    author: String,
    category: String,
    language: String,
    bookUser:[]
});
const poemModel = mongoose.model('poem',poemSchema)

module.exports = poemModel;