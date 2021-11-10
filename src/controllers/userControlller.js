const poemModel = require('../models/poemModel');
const userModel = require('../models/userModel');

module.exports.allAuthors = async (req,res)=>{
    const authors = await userModel.findOne({});
    res.status(200).send(authors)
}

module.exports.editAuthor = (req,res)=>{
    console.log('hello')
}

module.exports.oneAuthor = async (req,res)=>{
    const author = await userModel.findOne({id:req.params.id})
    if(!author) return res.status(404).send('Author doesnt find')
    return res.status(200).send(author)
}
module.exports.myProfile = async (req,res)=>{
    if(!req.user.id) return res.status(401).send('Access denied');
    const author = await userModel.findOne({id:req.user.id})
    if(!author) return res.status(404).send('Author doesnt find')
    return res.status(200).send(author)
}
module.exports.authorFollow = async (req,res)=>{
    if(!req.user.id) return res.status(401).send('Access denied');
    const my = await userModel.findOne({id:req.user.id});
    if(!my) return res.status(404).send('Author doesnt find');
    const author = await userModel.findOne({id:req.params.id});
    if(!author) return res.status(404).send('Author doesnt find');
    my.following.push({id:author.id,name:author.penName});
    author.followers.push({id:my.id,name:my.penName});
    await my.save();
    await author.save();
    res.status(200).send('Success');
}
module.exports.authorUnfollow = async (req,res)=>{
    if(!req.user.id) return res.status(401).send('Access denied');
    const my = await userModel.findOne({id:req.user.id});
    if(!my) return res.status(404).send('Author doesnt find');
    const author = await userModel.findOne({id:req.params.id});
    if(!author) return res.status(404).send('Author doesnt find');
    const newFollowing  = my.following.filter(flw=>flw.id!==author.id);
    my.following = newFollowing;
    const newFollower = author.followers.filter(flw=>flw.id1!==my.id);
    author.followers - newFollower;
    await my.save();
    await author.save();
    res.status(200).send('Success');
}
module.exports.poemLike = async (req,res)=>{
    if(!req.user.id) return res.status(401).send('Access denied');
    const poem = await poemModel.findOne({id:req.user.id});
    if(!poem) return res.status(404).send('doens find');
    const profile = await userModel.findOne({id:req.user.id});
    if(!profile) return res.status(404).send('Author doesnt find');
    profile.liked.push(poem.id);
    poem.like+=1;
    await profile.save();
    await poem.save();
    res.status(200).send('Success');
}
module.exports.PoemAddBookmark = async (req,res)=>{
    if(!req.user.id) return res.status(401).send('Access denied');
    const poem = await poemModel.findOne({id:req.user.id});
    if(!poem) return res.status(404).send('doens find');
    const profile = await userModel.findOne({id:req.user.id});
    if(!profile) return res.status(404).send('Author doesnt find');
    profile.bookMarks.push(poem);
    await profile.save();
    res.status(200).send('Success');
}