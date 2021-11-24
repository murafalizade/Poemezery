const notifModel = require('../models/notificationModel');
const poemModel = require('../models/poemModel');
const userModel = require('../models/userModel');

module.exports.allAuthors = async (req, res) => {
    const authors = await userModel.find({});
    const sendAuthor = authors.map((author)=>{
        return {
            penName:author.penName,
            id:author.id
        }
    })
    res.status(200).send(sendAuthor)
}

module.exports.editAuthor = async (req, res) => {
    const editInformation = req.body;
    const author = await userModel.updateOne({ id: req.user.userId }, { $set: editInformation });
    await author.save();
    return res.status(200).send('Success')
}

module.exports.oneAuthor = async (req, res) => {
    const author = await userModel.findOne({ id: req.params.id })
    if (!author) return res.status(404).send('Author doesnt find')
    const {id,penName,description,poems,imgUrl,followers,following} = author;
    const authorInfo = {id,penName,description,poems,imgUrl,
                    followers,following};
    return res.status(200).send(authorInfo);
}
module.exports.myProfile = async (req, res) => {
    const author = await userModel.findOne({ _id: req.user.userId })
    if (!author) return res.status(404).send('Author doesnt find')
    return res.status(200).send(author)
}
module.exports.authorFollow = async (req, res) => {
    const my = await userModel.findOne({ _id: req.user.userId });
    if (!my) return res.status(404).send('Author doesnt find');
    const author = await userModel.findOne({ id: req.params.id });
    if (!author) return res.status(404).send('Author doesnt find');
    const operation = my.following.some((flw)=>flw.id===author.id);
    if(!operation){
        my.following.push({ id: author.id, name: author.penName });
        author.followers.push({ id: my.id, name: my.penName });
    }
    else{
        const newFollowing = my.following.filter(flw => flw.id !== author.id);
        my.following = newFollowing;
        const newFollower = author.followers.filter(flw => flw.id !== my.id);
        author.followers = newFollower;    
    }
    await my.save();
    await author.save();
    res.status(200).send('Success');
}

module.exports.poemLike = async (req, res) => {
    const poem = await poemModel.findOne({ id: req.params.id });
    if (!poem) return res.status(404).send('doens find');
    const profile = await userModel.findOne({ _id: req.user.userId });
    if (!profile) return res.status(404).send('Author doesnt find');
    const operation = profile.liked.some((id)=>id===poem.id);
    let proccess;
    if(!operation){
        profile.liked.push(poem.id);
        poem.likes.push({id:profile.id,name:profile.penName});
        proccess = 'LIKE';
    }
    else{
        const newLiked = profile.liked.filter(flw => flw !== poem.id);
        const newMembers = poem.likes.filter(mem=>mem.id !==profile.id);
        poem.likes = newMembers;
        profile.liked = newLiked;
        proccess = 'DISLIKE';
    }
    await profile.save();
    await poem.save();
    res.status(200).send(proccess);
}

module.exports.PoemAddBookmark = async (req, res) => {
    const poem = await poemModel.findOne({ id: req.params.id });
    if (!poem) return res.status(404).send('doens find');
    const profile = await userModel.findOne({ _id: req.user.userId });
    if (!profile) return res.status(404).send('Author doesnt find');
    const operation = profile.bookMarks.some((bk)=>bk===poem);
    let process;
    if(!operation){
        profile.bookMarks.push(poem);
        poem.bookUser.push({penName:profile.penName})
        process = 'ADD';
    }
    else{
        const newBookMarks = profile.bookMarks.filter(bk => bk.id !== poem.id);
        const newPoemUser = poem.bookUser.filter(bk => bk.penName !== profile.penName);
        poem.bookUser = newPoemUser;
        profile.bookMarks = newBookMarks;
        process = 'REMOVE'
    }
    await profile.save();
    await poem.save();
    res.status(200).send(process);
}