const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv');
module.exports.setName = async (req, res) => {
    const currentUser = await userModel.findOne({ id: req.user.userId });
    if (!currentUser) {
        return res.status(401)
    }
    currentUser.penName = req.body.newName;
    await currentUser.save();
    return res.status(200).send('Success');
}
module.exports.register = async (req, res) => {
    const {email,password} = req.body;
    console.log(req.body)
    currentUser = await userModel.findOne({ email });
    if (currentUser) return res.status(400).send({ msg: 'You have already been account' })
    const salt = await bcrypt.genSalt(10)
    const bcryptPass = await bcrypt.hashSync(password, salt);
    const penName = email.slice(0,email.indexOf('@'));
    const user = new userModel({ ...req.body, ...{ password: bcryptPass }, ...{penName} });
    await user.save()
    jwt.sign({ userId: user._id }, process.env.LOCAL_REGISTER_SECRET, { expiresIn: `${7 * 24 * 60} min` }, (err, token) => {
        if (err) {
            res.sendStatus(500).send('some error occuped');
        } else {
            res.header('Header-Token', token)
            return res.status(200).send({token,user:{email,name:user.penName,image:user.imgUrl}});
        }
    });
}