const poemModel = require('../models/poemModel');
module.exports = async (req,res) => {
    const query = req.query?.q.toLowerCase();
    const poems = await poemModel.find({});
    const result = poems.filter(poem=>poem.poet.toLowerCase().includes(query) || poem.title.toLowerCase()===query).
    map(poem=>{return {
        id:poem.id,
        title:poem.title,
        desc:poem.poet.slice(0,50)
    }});
    res.send(result)
}