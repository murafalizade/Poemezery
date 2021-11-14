const router = require('express').Router();
const {getAllTags} = require('../controllers/tagController');
router.get('/tags',getAllTags);


module.exports = router;