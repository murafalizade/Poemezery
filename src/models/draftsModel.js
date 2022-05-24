const mongoose = require('mongoose');
const shortid = require('shortid'); 

const draftModel =  mongoose.model('drafts', new mongoose.Schema({
    id: { type: String, default: shortid.generate() },
    ownId: String,
    owner: String,
    tags: [],
    poet: String,
    poetHTML: String,
    align: {type:String,default:'center'},
    backgroundImg:String,
    title: String,
    author: String,
    category: String,
    language: String,
    pub:{type:Boolean,default:false}
}, {
    timestamps: true
}));

module.exports = draftModel;


