const mongoose = require('mongoose');
const shortid = require('shortid');
const tagModel = mongoose.model('tag',new mongoose.Schema({
    id:{type:String,default:shortid.generate()},
    name:String,
    count:{type:Number,default:0}
}));

module.exports = tagModel;