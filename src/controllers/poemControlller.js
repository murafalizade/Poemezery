const poemModel = require('../models/poemModel');
const userModel = require('../models/userModel');

module.exports.allPoems = async (req, res) => {
    const poems = await poemModel.findOne({});
    return res.status(200).send(poems)
}

module.exports.createPoem = async (req, res) => {
    const { author, title, language, tags, align, backgroundImg, category, poet } = req.body;
    const newPoem = new poemModel({ ownId: req.user.id, author, title, tags, align, language, poet, category, backgroundImg });
    savePoem = await newPoem.save();
    return res.status(200).send(savePoem);
}

module.exports.editPoem = (req, res) => {
    console.log('hello')
}

module.exports.onePoem = async (req, res) => {
    const poem = await poemModel.findOne({ id: req.params.id });
    if (!poem) {
        return res.status(404).send({ message: "Poem doesn't find" })
    }
    return res.status(200).send(poem)

}
module.exports.getBookmarks = async (req, res) => {
    const userId = req.user.id;
    const user = await userModel.findOne({id:userId});
    if(!user) return res.status(401).send('Please login or register');
    const bookMarkPoems = user.bookMarks;
    return res.status(200).send(bookMarkPoems);
}
module.exports.myPoems = (req, res) => {
    const userId = req.user.id;
    const user = await userModel.findOne({id:userId});
    if(!user) return res.status(401).send('Please login or register');
    const poems = user.poems;
    return res.status(200).send(poems);
}
