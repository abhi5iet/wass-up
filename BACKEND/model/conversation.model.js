import mongoose from "mongoose";

const conversationSchema = mongoose.Schema({
    members: { type: Array },
    message: { type: String }
},
    { timestamps: true, versionKey: false }
)

export default mongoose.model('conversation', conversationSchema);