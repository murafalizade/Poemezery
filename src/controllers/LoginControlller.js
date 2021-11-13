const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
module.exports.setName = async (req,res) =>{
    const currentUser = await userModel.findOne({id:req.body.id});
    if(!currentUser){
        return res.status(401)
    }
    currentUser.penName = req.body.newName;
    await currentUser.save();
    return res.status(200).send('Success');
}
module.exports.register = async (req,res) =>{
    currentUser = userModel.findOne({email:req.body.email});
    if(currentUser) return res.status(400).send({msg:'You have already been account'})
    const salt =  bcrypt.genSalt(10)
    const bcryptPass = await bcrypt.hash(req.body.password,salt);
    const user = new userModel({...req.body,...{password:bcryptPass}});
    await user.save()
    jwt.sign({ userId: user.id }, 'secretkey', { expiresIn: `${7 * 24 * 60} min` }, (err, token) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.header('Header-Token', token)
            return res.status(200).send(token);
        }
    });
}