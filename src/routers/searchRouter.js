const router = require('express').Router();
const {getAllTags} = require('../controllers/tagController');
const searchController= require('../controllers/searchController');
router.get('/tags',getAllTags);
router.get('/search?',searchController)


module.exports = router;