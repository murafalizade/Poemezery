const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
require('dotenv')
module.exports = async (req, res, next) => {
    const token = req.header('Header-Token')
    if (!token) return res.status(401).send('Access Denied')
    try {
        const verify = jwt.verify(token, process.env.LOCAL_REGISTER_SECRET);
        const user = await userModel.findById(verify.userId);
        if(!user) return res.status(404).send('User not found')
        req.user = verify
        next()
    }
    catch (err) {
        console.log(err)
        res.status(400).send('Invalid Token')
    }
}