const mongoose = require('mongoose');
const shortid = require('shortid');
const notifModel = mongoose.model('notitfication', new mongoose.Schema({
    id: { type: String, default: shortid.generate() },
    title:String,
    body:String,
    read:{type:Boolean,default:false},
    date:{type:Date,default:Date.now()}
}))


module.exports = notifModel;
