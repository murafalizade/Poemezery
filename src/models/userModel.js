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
    drafts:[],
    password: {type:String,default:''},
    bookMarks: [],
    imgUrl: {type:String,default:'http://localhost:8080/images/default_avatar.png'},
    description: { type: String, default: '' }
}));

module.exports = userModel;