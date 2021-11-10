const Router = require('express').Router()
const { allAuthors,
     editAuthor, 
     oneAuthor, 
     authorFollow, 
     myProfile, 
     authorUnfollow, 
     poemLike, 
     PoemAddBookmark } = require('../controllers/userControlller');
const isAuth = require('../midlewares/isAuth')
Router.get('/authors', allAuthors);
Router.put('/my-profile/edit/:id',isAuth, editAuthor);
Router.get('/authors/:id', oneAuthor);
Router.get('/my-profile',isAuth, myProfile);
Router.post('/author/:id/follow',isAuth, authorFollow);
Router.post('/author/:id/unfollow',isAuth, authorUnfollow);
Router.post('/poem/:id/like',isAuth, poemLike);
Router.post('/poem/:id/addbookmark',isAuth, PoemAddBookmark);
 
module.exports = Router