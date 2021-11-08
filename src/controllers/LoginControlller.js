const userModel = require('../models/userModel');

module.exports.setName = async (req,res) =>{
    const currentUser = await userModel.findOne({id:req.body.id});
    if(!currentUser){
        return res.status(401)
    }
    currentUser.penName = req.body.newName;
    await currentUser.save()
}