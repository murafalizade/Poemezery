const notifModel = require('../models/notificationModel');
const poemModel = require('../models/poemModel');
const userModel = require('../models/userModel');

module.exports.allAuthors = async (req, res) => {
    const authors = await userModel.find({});
    res.status(200).send(authors)
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
    return res.status(200).send(author)
}
module.exports.myProfile = async (req, res) => {
    const author = await userModel.findOne({ id: req.user.userId })
    if (!author) return res.status(404).send('Author doesnt find')
    return res.status(200).send(author)
}
module.exports.authorFollow = async (req, res) => {
    const my = await userModel.findOne({ id: req.user.userId });
    if (!my) return res.status(404).send('Author doesnt find');
    const author = await userModel.findOne({ id: req.params.id });
    if (!author) return res.status(404).send('Author doesnt find');
    my.following.push({ id: author.id, name: author.penName });
    author.followers.push({ id: my.id, name: my.penName });
    const notif = new notifModel({title:'Follow',body:`${author.penName} start to following you`});
    my.notifications.push(notif);
    await notif.save();
    await my.save();
    await author.save();
    res.status(200).send('Success');
}
module.exports.authorUnfollow = async (req, res) => {
    const my = await userModel.findOne({ id: req.user.userId });
    if (!my) return res.status(404).send('Author doesnt find');
    const author = await userModel.findOne({ id: req.params.id });
    if (!author) return res.status(404).send('Author doesnt find');
    const newFollowing = my.following.filter(flw => flw.id !== author.id);
    my.following = newFollowing;
    const newFollower = author.followers.filter(flw => flw.id1 !== my.id);
    author.followers = newFollower;
    await my.save();
    await author.save();
    res.status(200).send('Success');
}
module.exports.poemLike = async (req, res) => {
    const poem = await poemModel.findOne({ id: req.params.id });
    if (!poem) return res.status(404).send('doens find');
    const profile = await userModel.findOne({ id: req.user.userId });
    if (!profile) return res.status(404).send('Author doesnt find');
    profile.liked.push(poem.id);
    poem.like += 1;
    const notif = new notifModel({title:'Follow',body:`${author.penName} like your poem`});
    profile.notifications.push(notif);
    await notif.save();
    await profile.save();
    await poem.save();
    res.status(200).send('Success');
}

module.exports.poemUnlike = async (req, res) => {
    const poem = await poemModel.findOne({ id: req.params.id });
    if (!poem) return res.status(404).send('doens find');
    const profile = await userModel.findOne({ id: req.user.userId });
    if (!profile) return res.status(404).send('Author doesnt find');
    const newLiked = profile.liked.filter(flw => flw !== poem.id);
    profile.liked = newLiked;
    poem.like -= 1;
    await profile.save();
    await poem.save();
    res.status(200).send('Success');
}

module.exports.PoemRemoveBookmarks = async (req, res) => {
    const poem = await poemModel.findOne({ id: req.params.id });
    if (!poem) return res.status(404).send('doens find');
    const profile = await userModel.findOne({ id: req.user.userId });
    if (!profile) return res.status(404).send('Author doesnt find');
    const newBookMarks = profile.bookMarks.filter(bk => bk.id !== author.id);
    profile.bookMarks = newBookMarks;
    await profile.save();
    res.status(200).send('Success');
}

module.exports.PoemAddBookmark = async (req, res) => {
    const poem = await poemModel.findOne({ id: req.params.id });
    if (!poem) return res.status(404).send('doens find');
    const profile = await userModel.findOne({ id: req.user.userId });
    if (!profile) return res.status(404).send('Author doesnt find');
    profile.bookMarks.push(poem);
    await profile.save();
    res.status(200).send('Success');
}