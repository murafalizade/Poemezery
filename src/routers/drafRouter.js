const router = require('express').Router();
const isAuth = require('../midlewares/isAuth');
const { getAllDrafts, getOneDrafts, deleteDraft, updateDraf } = require('../controllers/drafController')

router.get('/drafts', isAuth, getAllDrafts);
router.get('/drafts/:id', isAuth, getOneDrafts);

router.delete('/drafts/:id', isAuth, deleteDraft);
router.post('/drafts/:id',  updateDraf);


module.exports = router;