const Router = require('express').Router()
const {allPoems,createPoem,editPoem,onePoem,getBookmarks,myPoems} = require('../controllers/poemControlller')
Router.get('/poems',allPoems);
Router.post('/create-poem',createPoem);
Router.put('/my-poem/edit/:id',editPoem);
Router.get('/poems/:id',onePoem);
Router.get('/bookmarks/poems',getBookmarks);
Router.get('/my-poems',myPoems);

module.exports = Router 