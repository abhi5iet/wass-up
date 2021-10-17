import mongoose from "mongoose";

const conversationSchema = mongoose.Schema({
    memebers: { type: Array },
    },
    {timeStamps: true}
)

export default mongoose.model('conversation', conversationSchema);