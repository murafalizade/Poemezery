const Router = require('express').Router();
const { allPoems, createPoem, editPoem, onePoem, getBookmarks, myPoems } = require('../controllers/poemControlller');

const isAuth = require('../midlewares/isAuth');
Router.get('/poems', allPoems);
Router.post('/create-poem', isAuth, createPoem);
Router.put('/my-poem/edit/:id', isAuth, editPoem);
Router.get('/poems/:id', onePoem);
Router.get('/bookmarks/poems', getBookmarks);
Router.get('/my-poems', isAuth, myPoems);

module.exports = Router