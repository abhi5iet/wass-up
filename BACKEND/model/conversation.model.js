import mongoose from "mongoose";

const conversationSchema = mongoose.Schema({
    members: { type: Array },
    },
    {timestamps: true, versionKey: false}
)

export default mongoose.model('conversation', conversationSchema);