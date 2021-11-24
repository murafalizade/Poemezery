const jwt = require('jsonwebtoken');
require('dotenv')
module.exports = (req, res, next) => {
    const token = req.header('Header-Token')
    if (!token) return res.status(401).send('Access Denied')
    try {
        const verify = jwt.verify(token, process.env.LOCAL_REGISTER_SECRET);
        req.user = verify
        next()
    }
    catch (err) {
        res.status(400).send('Invalid Token')
    }
}