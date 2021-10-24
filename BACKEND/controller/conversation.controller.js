import conversationModel from "../model/conversation.model.js";

export const newConvo = async (req, res) => {
    let senderId = req.body.senderId;
    let recieverId = req.body.recieverId;
    try {
        const exist = await conversationModel.findOne({ members: { $all: [recieverId, senderId] } });
        if (exist) {
            return res.status(200).json('Converstaion Already Exist');
        }
        const convo = new conversationModel({
            members: [senderId, recieverId]
        })
        await convo.save();
        res.status(201).json("New Convo Saved Successfully !")
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getConvo = async (req, res) => {
    try {
        const conversation = await conversationModel.findOne({ members: { $all: [req.body.sender, req.body.reciever] } });
        res.status(200).json(conversation);
    } catch (err) {
        res.status(500).json({ err: err });
    }
}