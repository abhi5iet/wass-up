import conversationModel from "../model/conversation.model.js";
import Message from "../model/message.model.js";

export const newMessage = async (req, res) => {
    const mess = new Message(req.body);
    try {
        await mess.save();
        await conversationModel.findByIdAndUpdate(req.body.conversationId, { message: req.body.text });
        res.status(200).json('Message Saved Successfully');
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getMessage = async (req, res) => {
    try {
        const messages = await Message.find({ conversationId: req.params.id })
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json(err)
    }
}