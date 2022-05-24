const draftModel = require('../models/draftsModel');
const userModel = require('../models/userModel');

module.exports.getAllDrafts = async (req, res) => {
    const user = await userModel.findById(req.user.userId);
    res.send(user.drafts)
}
module.exports.getOneDrafts = () => { }
module.exports.deleteDraft = () => { }
module.exports.updateDraf = async (req, res) => {  
    const user = await userModel.findById(req.user.userId);
    const draft = await draftModel.findOne({ id: req.params.id });
    console.log(draft)
    if (draft && user) {
        await draftModel.findOneAndUpdate({ id: req.params.id }, { $set: req.body })
        const draftNew = { ...draft, ...req.body };
        user.drafts.push(draftNew)
        await draftModel.save();
    }
    else {
        const newDraft = new draftModel({ ...req.body, id: req.params.id })
        user.poems.push(newDraft)
        await newDraft.save()
    }
    await user.save();

    return res.status(200).send("Succes");
} 
