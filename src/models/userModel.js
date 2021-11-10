const mongoose = require('mongoose');
const shortid = require('shortid');


const userModel = mongoose.model('user', new mongoose.Schema({
    id: { type: String, default: shortid.generate() },
    followers: [],
    following: [],
    poems: [],
    notifications: [],
    email: String,
    penName: String,
    liked:[],
    password: {type:String,default:''},
    bookMarks: [],
    imgUrl: String,
    description: { type: String, default: '' }
}));

module.exports = userModel;