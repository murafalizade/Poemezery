const Router = require('express').Router();
const { allPoems, createPoem,delPoem, editPoem, onePoem, getBookmarks, myPoems } = require('../controllers/poemControlller');

const isAuth = require('../midlewares/isAuth');
Router.get('/poems', allPoems);
Router.post('/create-poem',isAuth, createPoem);
Router.put('/my-poem/edit/:id', isAuth, editPoem);
Router.get('/poems/:id', onePoem);
Router.get('/bookmarks/poems',isAuth, getBookmarks);
Router.get('/my-poems', isAuth, myPoems);
Router.delete('/my-poem/:id',isAuth,delPoem);
module.exports = Router