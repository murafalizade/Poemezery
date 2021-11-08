const Router = require('express').Router()
const { allAuthors,
     editAuthor, 
     oneAuthor, 
     authorFollow, 
     myProfile, 
     authorUnfollow, 
     poemLike, 
     PoemAddBookmark } = require('../controllers/userControlller')
Router.get('/authors', allAuthors);
Router.put('/my-profile/edit/:id', editAuthor);
Router.get('/authors/:id', oneAuthor);
Router.get('/my-profile', myProfile);
Router.post('/author/:id/follow', authorFollow);
Router.post('/author/:id/unfollow', authorUnfollow);
Router.post('/poem/:id/like', poemLike);
Router.post('/poem/:id/addbookmark', PoemAddBookmark);
 
module.exports = Router