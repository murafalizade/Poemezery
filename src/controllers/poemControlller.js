const poemModel = require('../models/poemModel');
const userModel = require('../models/userModel');
const tagsModel = require('../models/tagModel');
module.exports.allPoems = async (req, res) => {
    const poems = await poemModel.find({});
    const sendPoem = poems.map((poem) => {
        return {
            id: poem.id,
            ownId: poem.ownId,
            owner:poem.owner,
            poet: poem.poet,
            title: poem.title,
            views: poem.views,
            bookUser: poem.bookUser,
            likes: poem.likes,
            category: poem.category,
            language: poem.language
        }
    })
    return res.status(200).send(sendPoem)
}

module.exports.createPoem = async (req, res) => {
    console.log(req.body);
    const { tags } = req.body;
    const profile = await userModel.findOne({ _id: req.user.userId });
    if (!profile) return res.status(500).send('error');
    tags.forEach(async (tag) => {
        const currentTag = await tagsModel.findOne({ name: tag.text });
        if (!currentTag) {
            const newTag = new tagsModel({ name: tag.text });
            await newTag.save();
        }
        else {
            currentTag.count += 1;
            await currentTag.save();
        }
    })
    const newPoem = new poemModel({...req.body, ...{ ownId: profile.id, owner: profile.penName } });
    profile.poems.push(newPoem);
    savePoem = await newPoem.save();
    await profile.save();
    return res.status(200).send(savePoem);
}

module.exports.editPoem = async (req, res) => {
    const editInformation = req.body;
    const author = await userModel.findOne({ id: req.user.userId });
    if (!author) return res.status(400).send('Abonded');
    const updatePoem = author.poems.map(poem => {
        if (poem.id === req.params.id) {
            poem = { ...poem, ...editInformation }
        }
        return poem
    });
    author.poems = updatePoem;
    await author.save();
    const poem = await poemModel.updateOne({ id: req.params.id }, { $set: editInformation })
    await poem.save();
    return res.status(200).send('success')

}

module.exports.onePoem = async (req, res) => {
    const poem = await poemModel.findOne({ id: req.params.id });
    if (!poem) return res.status(404).send({ message: "Poem doesn't find" })
    poem.views += 1;
    await poem.save();
    return res.status(200).send(poem)

}
module.exports.getBookmarks = async (req, res) => {
    const user = await userModel.findOne({ _id: req.user.userId });
    if (!user) return res.status(401).send('Please login or register');
    const bookMarkPoems = user.bookMarks;
    return res.status(200).send(bookMarkPoems);
}
module.exports.myPoems = async (req, res) => {
    const userId = req.user.userId;
    const user = await userModel.findOne({ id: userId });
    if (!user) return res.status(401).send('Please login or register');
    const poems = user.poems;
    return res.status(200).send(poems);
}