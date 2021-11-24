const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('../../configs/passport');
require('../../configs/localPassport')
require('../../configs/fbPassport');
require('dotenv')


const { setName, register } = require('../controllers/LoginControlller');
const isAuth = require('../midlewares/isAuth');

// google login
router.get('/auth/google', passport.authenticate('google', {
    session: false,
    scope: ["profile", "email"],
    accessType: "offline",
    approvalPrompt: "force"
}));

router.get('/auth/google/callback/', passport.authenticate('google', { session: false }), (req, res) => {
    jwt.sign({ userId: req.user.id }, process.env.LOCAL_REGISTER_SECRET, { expiresIn: `${7 * 24 * 60} min` }, (err, token) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.header('Header-Token', token)
            res.send(token);
        }
    });
}
);

router.post('/auth/login', passport.authenticate('local', { session: false }));

router.post('/auth/set/name',isAuth, setName);
router.post('/auth/register', register);



router.get('/auth/facebook',
    passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { session: false }), (req, res) => {
        jwt.sign({ userId: req.user.id }, process.env.LOCAL_REGISTER_SECRET, { expiresIn: `${7 * 24 * 60} min` }, (err, token) => {
            if (err) {
                res.sendStatus(500);
            } else {
                res.header('Header-Token', token)
                res.send(token);
            }
        });
    }
);
module.exports = router