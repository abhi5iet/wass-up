import mongoose from "mongoose";

const MessageSchema = mongoose.Schema({
    sender: { type: String, required: true },
    conversationId: { type: String, required: true },
    text: { type: String, require: true }
},
    {
        timestamps: true,
        versionKey: false,
    })

const Message = mongoose.model('message', MessageSchema);
export default Message;