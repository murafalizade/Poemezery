const Router = require('express').Router()
const { allAuthors,
     editAuthor, 
     oneAuthor, 
     authorFollow, 
     myProfile, 
     poemLike, 
     PoemAddBookmark,
 } = require('../controllers/userControlller');
const isAuth = require('../midlewares/isAuth')
Router.get('/authors', allAuthors);
Router.put('/my-profile/edit/:id',isAuth, editAuthor);
Router.get('/authors/:id', oneAuthor);
Router.get('/my-profile',isAuth, myProfile);
Router.put('/author/:id/follow',isAuth, authorFollow);
Router.put('/poem/:id/like',isAuth, poemLike);
Router.put('/poem/:id/addbookmark',isAuth, PoemAddBookmark);

module.exports = Router