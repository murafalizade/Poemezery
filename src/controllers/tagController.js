const tagsModel = require('../models/tagModel')
module.exports.getAllTags = async(req,res) =>{
    const tags = await tagsModel.find({});
    res.status(200).send(tags)
}