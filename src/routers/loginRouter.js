const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('../../configs/passport');
const { setName } = require('../controllers/LoginControlller')

// google login
router.get('/auth/google', passport.authenticate('google', {
    session: false,
    scope: ["profile", "email"],
    accessType: "offline",
    approvalPrompt: "force"
}));

router.get('/auth/google/callback/', passport.authenticate('google', { session: false }), (req, res) => {
    jwt.sign({ userId: req.user.id }, 'secretkey', { expiresIn: `${7*24*60} min` }, (err, token) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.header('Header-Token',token)
            res.send( token );
        }
    });
}
);
router.post('/auth/set/name', setName);
module.exports = router